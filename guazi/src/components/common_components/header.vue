<template>
  <div class="header">
    <a class="header_icon" title="瓜子二手车"></a>
    <span class="city">
      南昌
      <i></i>
    </span>
    <div class="header_menu">
   
        <div class="login">
      <i class="avatar"></i>
      <router-link to="">登录</router-link></div>
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
</template>
<script>
export default {
 
  methods:{
    
  }
};
</script>

<style scoped>
.header {
  min-width: 1200px;
  position: absolute;
  left: 50%;
  margin-left: -600px;
  background-color: green;
  color: #fff;
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
  color: #fff;
}
a:hover,.city:hover{
  color:#fff; font-weight:bold;
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
  border-top: 6px solid white;
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
    border-right: 1px solid #fff;
}
</style>
