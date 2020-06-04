<template>
  <div class="homeContainer">
    <el-container class="Container">
      <el-header>
        <div class="brand">
          <img src="../assets/logo.png" alt />
          <span>电商后台管理系统</span>
        </div>
        <el-button round @click="exit">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="toggle?'200px':'64px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="!toggle"
            :collapse-transition="false"
            :default-active="activePath"
            router
          >
            <!-- 一级菜单 -->
            <el-submenu v-for="item in menuList" :key="item.id" :index="item.id+''">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                v-for="child in item.children"
                :key="child.id"
                :index="'/'+child.path"
                @click="changePath('/'+child.path)"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{child.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [],
      toggle: true,
      activePath: ""
    };
  },
  created() {
    this.getListData();
    this.menuList.unshift()
    this.activePath = window.sessionStorage.getItem("activePath")
  },
  methods: {
    exit() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getListData() {
      const { data: res } = await this.$http.get("/menus");
      this.menuList = res.data;
    //   console.log(this.menuList);
    },
    toggleCollapse() {
      this.toggle = !this.toggle;
    },
    changePath(str) {
        this.activePath = str
        window.sessionStorage.setItem("activePath", str)
    }
  }
};
</script>
<style lang='less' scoped>
.homeContainer {
  height: 100%;
  .Container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    .el-button {
      height: 50px;
    }
    span {
      margin-left: 15px;
    }
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
  }
  .el-aside {
    background-color: #333744;
    height: 100%;
    .toggle-button {
      background-color: #4a5064;
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      text-align: center;
      letter-spacing: 2px;
      cursor: pointer;
    }
    .el-menu {
      border: 0;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>