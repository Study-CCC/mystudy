<template>
  <div class="topHeader">
      <div class="header">
    <Login :flag="flag" @changeFlag="changeFlag"></Login>
    <City id="abcd" :flag="cityFlag"></City>
    <a class="header_icon" title="瓜子二手车"></a>
    <span @mouseenter="this.cityOpen" @mouseleave="this.cityLeave" class="city">
      南昌
      <i></i>
    </span>
    <div class="header_menu">
   
        <div class="login">
      <i class="avatar"></i>
      <a @click="open" >登录</a></div>
          <div class="phone">热线电话 400-060-6085</div>
  </div>
   <div class="header_list">
        <router-link to>首页</router-link>

        <router-link to>我要买车</router-link>
   
        <router-link to>我要卖车</router-link>
 
        <router-link to>瓜子服务</router-link>
     
        <router-link to>瓜子金融</router-link>
   
        <router-link to>毛豆新车</router-link>
</div>
  </div>
  </div>
</template>

<script> 
import Login from '../common_components/login'
import City from '../common_components/city/city'
export default {
  data(){
    return {
      flag:false,
      cityFlag:false
    }
  },

  methods:{
    open(){
      this.flag = true
      // console.log('111')
    },
    changeFlag(params){
      this.flag=false
    },
    cityOpen(){
     this.cityFlag = true
    //  console.log(cityDiv)
    },
    cityLeave(){
      var cityDiv = document.getElementById('abcd')
      var timer = null;
      timer=setTimeout(()=>{
        this.cityFlag = false
      },300)
       cityDiv.addEventListener("mouseenter",()=>{
        this.cityFlag = true;
        clearTimeout(timer)
      })
       cityDiv.addEventListener("mouseleave",()=>{
        this.cityFlag=false
      })
    }
  },
  components:{
    Login,
    City
  }
};
</script>
<style lang='' scoped>
.topHeader{
    top: 0;
    height: 70px;
    width: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 9999;
}
.header {
  width: 1200px;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  margin-left: -600px;
  color: #181818;
  /* box-shadow: none; */
  /* background-color: green; */
}
.header_menu{
    padding-left: 200px;
}
.header_list {
    float: right;
  font-size: 14px;
  padding-top: 7px;
}
.header_list a {
    line-height: 40px;
    margin: 0 20px;
}
a {
  text-decoration: none;
  color: #181818;
}
a:hover,.city:hover{
  color:#3cb46d; 
}
.header_icon {
    float: left;
  display: block;
  width: 55px;
  height: 55px;
  background: url("../../assets/img/guaziicon1.png");
  background-size: contain;
}
.city{
    float: left;
  line-height: 34px;
  font-size: 14px;
  cursor: pointer;
  padding: 0 15px;
  margin: 10.5px 0 0 14px;
}
.city i {
  display: inline-block;
  vertical-align: middle;
  width: 0px;
  height: 0px;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  border-top: 6px solid #181818;
  margin: 0 0 0 5px;
}
.login{
    float: right;
    line-height: 16px;
    cursor: pointer;
    margin-top: 19px;
    margin-left: 10px;
    font-size: 14px;
    padding-left: 24px;
    padding-bottom: 11px;
}
.login{
    background-image: url("../../assets/img/icon_@2x.png");
    background-position: 6px -268px;
    background-size: 451px 300px;
}
.phone{
    float: right;
    font-size: 14px;
    line-height: 16px;
    padding: 0 15px 0 0;
    margin-top: 19px;
    margin-left: 30px;
    border-right: 1px solid #181818;
}
</style>