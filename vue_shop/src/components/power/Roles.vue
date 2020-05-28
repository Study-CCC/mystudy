<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
        <el-breadcrumb-item>角色列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" class="addRoleBtn">添加角色</el-button>
      <el-table :data="rolesList" border style="width: 100%">
        <el-table-column type="expand">
          <template v-slot="rolesInfo">
            <el-row
              :class="['middle','borderBottom',id==0?'borderHeader':'']"
              v-for="(item,id) in rolesInfo.row.children"
              :key="id"
            >
              <!-- 一级目录 -->
              <!-- <pre>{{rolesInfo.row}}</pre>   -->
              <el-col :span="6">
                <el-tag closable @close="tagClose(rolesInfo.row,item.id)">{{item.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
                <!-- {{item}} -->
              </el-col>
              <el-col :span="18">
                <el-row
                  v-for="(item1,id1) in item.children"
                  :class="['middle',id1==item.children.length?'':'borderBottom']"
                  :key="id1"
                >
                  <!-- 二级目录 -->
                  <el-col :span="9">
                    <el-tag
                      closable
                      @close="tagClose(rolesInfo.row,item1.id)"
                      type="success"
                    >{{item1.authName}}</el-tag>
                    <!-- {{item1}} -->
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <!-- 三级目录 -->
                  <el-col :span="15">
                    <el-tag
                      closable
                      @close="tagClose(rolesInfo.row,item2.id)"
                      type="danger"
                      v-for="(item2,id2) in item1.children"
                      :key="id2"
                    >{{item2.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作" width="300">
          <template v-slot="rolesInfo">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editRole(rolesInfo.row)"
            >编辑</el-button>
            <el-button type="warning" size="mini" icon="el-icon-share" @click="showSetRight">分配权限</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="deleteRoles(rolesInfo.row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="提示" :visible.sync="treeRolesVisible" width="30%">
      <el-tree
        :props="defaultProps"
        :data="treeRoles"
        node-key="id"
        :default-checked-keys="defaultKeys"
        show-checkbox
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="treeRolesVisible = false">取 消</el-button>
        <el-button type="primary" @click="treeRolesVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rolesList: [],
      treeRoles: [],
      defaultKeys: [],
      defaultProps: {
        label: "authName",
        children: "children"
      },
      treeRolesVisible: false
    };
  },
  created() {
    this.getRolesList();
  },
  methods: {
    async showSetRight() {
      const { data: res } = await this.$http.get("rights/tree");
      if (res.meta.status !== 200)
        return this.$message.error("获取权限信息失败");
      this.treeRoles = res.data;
      console.log(this.treeRoles);
      this.treeRolesVisible = !this.treeRolesVisible;
    },
    tagClose(role, rightId) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `roles/${role.id}/rights/${rightId}`
          );
          // console.log(res)
          if (res.meta.status !== 200) return new Error();
          // 由于删除后会返回最新的权限信息,为了避免重复渲染页面，只更新role.child下的数据即可
          role.children = res.data;
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    async getRolesList() {
      const { data: res } = await this.$http.get("roles");
      console.log(res.data);
      if (res.meta.status !== 200)
        return this.$message.error("权限列表获取失败");
      this.rolesList = res.data;
      for (let i = 0; i < res.data.length; i++) {
        let item = res.data[i];
        // console.log(item.children.length);
          for (let j = 0; j < item.children.length; j++) {
          let childItem = item.children[j];
          // console.log(childItem);   
          this.defaultKeys.push(childItem.id);
          for (let m = 0; m < childItem.children.length; m++) {
            let childItem1 = childItem.children[m];
            this.defaultKeys.push(childItem1.id);
          }
        }
      }
      // console.log(this.defaultKeys)
    },
    editRole(user) {},
    deleteRoles(id) {
      // console.log(id);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          // console.log(id)
          const { data: res } = await this.$http.delete(`roles/${id}`);
          if (res.meta.status !== 200) return this.$message.error("删除失败");
          this.getUserList();
          this.$message({
            type: "success",
            message: "成功删除"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang='less' scoped>
.addRoleBtn {
  margin-top: 10px;
}
.el-table {
  margin-top: 10px;
}
.el-tag {
  margin: 5px;
}
.borderBottom {
  border-bottom: 1px solid #eee;
}
.borderHeader {
  border-top: 1px solid #eee;
}
.middle {
  display: flex;
  align-items: center;
}
</style>