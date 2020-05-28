<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="queryInfo.query"
            @clear="getUserList"
            clearable
          >
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="dialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="userlist" border style="width: 100%">
        <el-table-column width="50" label="#" type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态">
          <template v-slot:default="slotProps">
            <el-switch
              v-model="slotProps.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
            <!-- {{ slotProps.row }} -->
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template v-slot="userInfo">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-edit"
                @click="showEditUser(userInfo.row)"
              ></el-button>
            </el-tooltip>
            <el-button type="warning" size="mini" icon="el-icon-share"></el-button>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteUser(userInfo.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagesize"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%" @close="dialogClosed">
      <el-form :model="userForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="userForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑信息 -->
    <el-dialog title="编辑用户信息" :visible.sync="editVisible" width="50%" @close="editClosed">
      <el-form :model="userForm" :rules="rules" ref="editForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="userForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    // 验证邮箱
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (regEmail.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    // 验证手机号
    const checkMobile = (rule, value, cb) => {
      const regMobile = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 1
      },
      userForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 6, max: 18, message: "长度在6到18个字符", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 5, max: 11, message: "长度在5到11个字符", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ]
      },
      userlist: [],
      total: 0,
      dialogVisible: false,
      editVisible: false
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    deleteUser(user){
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async() => {
          // console.log(id)
         const {data:res} = await this.$http.delete(`users/+${user.id}`)
          console.log(res)
          if(res.meta.status !== 200)
           return this.$message.error("删除失败")
          this.getUserList()
          this.$message({
            type:'success',
            message:'成功删除'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    },
    editClosed() {
      this.$refs.editForm.resetFields();
    },
    editUser() {
      this.$refs.editForm.validate(async valid => {
        if (!valid) return this.$message.error("消息错误");
        const { data: res } = await this.$http.put(
          `users/+${this.userForm.id}`,
          this.userForm
        );
        if (res.meta.status !== 200) return this.$message.error("更新失败");
        this.$message.success("更新成功");
        this.editVisible = false;
        this.getUserList();
      });
    },
    showEditUser(userInfo) {
      this.userForm = userInfo;
      // console.log(this.userForm)
      this.editVisible = true;
    },
    async getUserList() {
      const { data: res } = await this.$http.get("/users", {
        params: this.queryInfo
      });
      // console.log(res);
      if (res.meta.status != 200) return this.$message.error("获取消息失败");
      this.total = res.data.total;
      this.userlist = res.data.users;
    },
    dialogClosed() {
      this.$refs.ruleForm.resetFields();
    },
    handleSizeChange(res) {
      this.queryInfo.pagesize = res;
      this.getUserList();
    },
    handleCurrentChange(res) {
      this.queryInfo.pagenum = res;
      this.getUserList();
    },
    addUser() {
      this.$refs.ruleForm.validate(async valid => {
        if (!valid) return this.$message.error("信息错误");
        const { data: res } = await this.$http.post("users", this.userForm);
        if (res.meta.status !== 201) return this.$message.error("添加用户失败");
        this.$message.success("添加用户成功");
        this.dialogVisible = false;
      });
    }
  }
};
</script>
<style lang='less' scoped>
.el-table {
  margin-top: 10px;
}
.el-pagination {
  margin-top: 10px;
}
.btn {
  margin: 0 auto;
  width: 40%;
}
</style>