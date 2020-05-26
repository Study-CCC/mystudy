<template>
  <div class="login-container">
    <div class="login-box">
        <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 表单区域 -->
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" ></el-input>
        </el-form-item>
          <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="login">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
          username:'admin',
          password:'123456'
      },
      rules:{
          username:[
              {required:true,message:"请输入账号",trigger:'blur'},
              {min:3,max:10,message:"长度在3到10个字符",trigger:'blur'}
          ],
           password:[
              {required:true,message:"请输入密码",trigger:'blur'},
              {min:3,max:10,message:"长度在3到10个字符",trigger:'blur'}
          ]
    }
    }},
      methods: {
        login(){
            this.$refs.loginFormRef.validate(async valid=>{
                if(valid){
                   const {data:res} = await this.$http.post('login',this.loginForm)
                   if(res.meta.status == 200){
                     window.sessionStorage.setItem("token",res.data.token)
                     this.$router.push('/home')
                   }
                   else return this.$message.error('登录失败')
                }
                else return;
            })
        },
        reset(){
            this.loginForm.username = ''
            this.loginForm.password = ''
        }
    }
};
</script>
<style lang='less' scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .login-form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .login-btn{
        display: flex;
        justify-content: center;
    }
  }
}
</style>