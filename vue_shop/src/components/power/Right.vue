<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>列表管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="powerList" border style="width: 100%">
          <el-table-column label="#" type="index" width="180"></el-table-column>
        <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
        <el-table-column prop="path" label="路径" width="180"></el-table-column>
        <el-table-column prop="level" label="权限等级">
            <template v-slot="powerData">
                <el-tag :type="tagType[powerData.row.level]">{{tagName[powerData.row.level]}}</el-tag>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        powerList:[],
        tagType:['success','info','danger'],
        tagName:['一级','二级','三级']
    };
  },
  created(){
      this.getPowerList()
  },
  methods:{
     async getPowerList(){
         const {data:res}=await this.$http.get('rights/list')

         if(res.meta.status!==200) return this.$message.error("权限列表获取失败")
         this.powerList = res.data
      }
  }
};
</script>
<style lang='' scoped>
</style>