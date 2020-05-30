<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-button type="primary" @click="showAddCate">添加分类</el-button>
      <!-- <el-table border style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="分类名称"></el-table-column>
        <el-table-column label="是否有效"></el-table-column>
        <el-table-column label="排序"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>-->
      <tree-table
        :data="catelist"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
      >
        <template slot="isok" slot-scope="scope">
          <i class="el-icon-success" style="color:lightgreen" v-if="scope.row.cat_deleted===false"></i>
          <i class="el-icon-error" v-else></i>
        </template>
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level===0">一级</el-tag>
          <el-tag type="success" v-else-if="scope.row.cat_level===1" size="mini">二级</el-tag>
          <el-tag type="warning" v-else size="mini">三级</el-tag>
        </template>
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
        </template>
      </tree-table>
    </el-card>
    <el-dialog title="添加分类" @close="addCateDialogClosed" :visible.sync="showClassify" width="50%">
      <el-form ref="addCateForm" :model="addCateForm" label-width="100px" :rules="addCateFormRules">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
            <!-- props用来指定配置对象 -->
          <el-cascader  v-model="selectKeys" clearable @change="parentCateChanged" :options="parentCateList" :props="cascaderProps"></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showClassify = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagesize"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showClassify: false,
      catelist: [],
      addCateForm: {
        cat_name: "",
        cat_pid: 0, 
        cat_level: 0
      },
      parentCateList: [],
      queryInfo: {
        query: "",
        pagenum: 5,
        pagesize: 1
      },
      selectKeys:[],
      cascaderProps:{
          value:'cat_id',
          label:'cat_name',
          children:'children',
          checkStrictly:'true'
      },
      total: 0,
      columns: [
        {
          label: "分类名称",
          prop: "cat_name"
        },
        {
          label: "是否有效",
          type: "template",
          template: "isok"
        },
        {
          label: "排序",
          type: "template",
          template: "order"
        },
        {
          label: "操作",
          type: "template",
          template: "opt"
        }
      ],
      addCateFormRules: {
        cat_name: [
          { required: true, message: "请输入分类名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    async getCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: this.queryInfo
      });
      if (res.meta.status !== 200)
        return this.$message.error("商品分类列表获取失败");
      this.catelist = res.data.result;
      this.total = res.data.total;
      // console.log(this.catelist)
    },
    handleSizeChange(res) {
      this.queryInfo.pagesize = res;
      this.getCateList();
    },
    handleCurrentChange(res) {
      this.queryInfo.pagenum = res;
      this.getCateList();
    },
    parentCateChanged(){
        if(this.selectKeys.length>0){
           this.addCateForm.cat_pid = this.selectKeys[this.selectKeys.length-1]
           this.addCateForm.cat_level = this.selectKeys.length
           return
        }
        else{
            this.addCateForm.cat_pid =0;
            this.addCateForm.cat_level = 0;
        }
    },
    addCate(){
        this.$refs.addCateForm.validate(async valid=>{
            if(!valid) return;
            const {data:res} =await this.$http.post('categories',this.addCateForm)
            if(res.meta.status !== 201) return this.$message.error("添加失败")
            this.$message.success("添加成功 ")
            this.getCateList()
            this.showClassify =false
        })
    },
    addCateDialogClosed(){
        this.$refs.addCateForm.resetFields()
        this.selectKeys = []
        this.addCateForm.cat_level = 0
        this.addCateForm.cat_pid=0
    },
    showAddCate() {
      this.showClassify = true;
      this.getParentCateList();
    },
    async getParentCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: {
          type: 2
        }
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取父级信息失败");
      this.parentCateList = res.data;
    //   console.log(this.parentCateList)
    }
  }
};
</script>
<style lang='less' scoped>
</style>