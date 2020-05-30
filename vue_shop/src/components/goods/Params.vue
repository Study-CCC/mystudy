<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-alert title="警告提示的文案" type="warning" :closable="false" show-icon></el-alert>
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类:</span>
          <el-cascader
            v-model="selectedCateKeys"
            :options="catelist"
            :props="cateProps"
            @change="handleChange"
          ></el-cascader>
        </el-col>
      </el-row>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="动态参数" name="many">
          <el-button
            type="primary"
            size="mini"
            @click="addDialogVisible=true"
            :disabled="isBtnDisbled"
          >添加参数</el-button>
          <el-table :data="manyTableData" border stripe>
            <el-table-column type="expand"></el-table-column>
            <el-table-column label="#" type="index"></el-table-column>
            <el-table-column label="参数名称" prop="attr_name"></el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <el-button
                  type="primary"
                  @click="showEditParams(scope.row)"
                  size="mini"
                  icon="el-icon-edit"
                >编辑</el-button>
                <el-button
                  type="danger"
                  @click="deleteParams(scope.row)"
                  size="mini"
                  icon="el-icon-delete"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="only">
          <el-button
            type="primary"
            size="mini"
            @click="addDialogVisible=true"
            :disabled="isBtnDisbled"
          >添加属性</el-button>
          <el-table :data="onlyTableData" border stripe>
            <el-table-column type="expand"></el-table-column>
            <el-table-column label="#" type="index"></el-table-column>
            <el-table-column label="属性名称" prop="attr_name"></el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <el-button
                  type="primary"
                  @click="showEditParams(scope.row)"
                  size="mini"
                  icon="el-icon-edit"
                >编辑</el-button>
                <el-button
                  type="danger"
                  @click="deleteParams(scope.row)"
                  size="mini"
                  icon="el-icon-delete"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-dialog
      @close="addDialogClosed"
      :title="'添加'+titleText"
      :visible.sync="addDialogVisible"
      width="50%"
    >
      <el-form ref="addFormRef" :rules="addFormRules" :model="addForm" label-width="100px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      @close="editDialogClosed"
      :title="'编辑'+titleText"
      :visible.sync="editDialogVisible"
      width="50%"
    >
      <el-form ref="editFormRef" :rules="addFormRules" :model="addForm" label-width="100px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "many",
      catelist: [],
      manyTableData: [],
      onlyTableData: [],
      editDialogVisible: false,
      cateProps: {
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_id",
        children: "children"
      },
      selectedCateKeys: [],
      addDialogVisible: false,
      addForm: {
        attr_name: ""
      },
      addFormRules: {
        attr_name: [
          { required: true, message: "请输入参数名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    async getCateList() {
      const { data: res } = await this.$http.get("categories");
      if (res.meta.status !== 200)
        return this.$message.error("获取商品列表失败");
      this.catelist = res.data;
    },
    addParams() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName
          }
        );
        if (res.meta.status !== 201) return this.$message.error("添加参数失败");
        this.$message.success("添加参数成功");
        this.addDialogVisible = false;
        this.getParamsData();
      });
    },
    handleTabClick() {
      this.getParamsData();
    },
    handleChange() {
      this.getParamsData();
    },
    showEditParams(params) {
      this.editDialogVisible = true;
      this.addForm.attr_name = params.attr_name;
      this.addForm.attrId = params.attr_id;
    },
    async editParams() {
      const { data: res } = await this.$http.put(
        `categories/${this.cateId}/attributes/${this.addForm.attr_id}`,
        {
          params: {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName
          }
        }
      );
      // console.log(params)
      if (res.meta.status !== 200) return this.$message.error("编辑列表失败");
      this.$message.success("编辑成功");
      this.getCateList();
      this.editDialogVisible = false;
    },
    deleteParams(params) {},
    async getParamsData() {
      if (this.selectedCateKeys.length !== 3) {
        this.selectedCateKeys = [];
        return;
      }
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: { sel: this.activeName }
        }
      );
      if (res.meta.status !== 200)
        return this.$message.error("获取参数列表失败");
      if (this.activeName === "many") {
        this.manyTableData = res.data;
      } else {
        this.onlyTableData = res.data;
      }
    }
  },
  computed: {
    isBtnDisbled() {
      if (this.selectedCateKeys.length !== 3) return true;
      return false;
    },
    cateId() {
      if (this.selectedCateKeys.length === 3) return this.selectedCateKeys[2];
      return null;
    },
    titleText() {
      if (this.activeName === "many") return "动态参数";
      else return "静态属性";
    }
  }
};
</script>
<style lang='less' scoped>
.cat_opt {
  margin: 15px 0;
}
</style>