<template>
  <div class="pop-box pop-login show" id="login1" v-show="flag">
    <form
      action="#"
      method="post"
      target="guazi_login"
    >
      <div class="pop-close" id="closeLogin1" @click="close"></div>
      <p class="pop-tit js-logintitle">瓜子二手车直卖网</p>
      <ul class="phone-login">
        <li>
          <p class="phone-login-tit">手机号码</p>
          <input name="phone" class="phone-login-input js-phoneNum1" placeholder />
        </li>
        <li>
          <p class="phone-login-tit">验证码</p>
          <input name="code" class="phone-login-input phone-login-code js-code1" placeholder />
          <button class="get-code">获取验证码</button>
        </li>
      </ul>
      <p class="p-error" id="loginError1"></p>
      <button class="sub-btn js-checkcode" type="submit">登录</button>
      <p class="free-phone">免费咨询400-060-6085</p>
      <p class="agree-text">
        登录即视为同意
        <a
          href="#"
          target="_blank"
        >《隐私权条款》</a>
      </p>

      <input type="hidden" name="source" value="2" />
      <input type="hidden" name="staticPage" value="#" />
      <input type="hidden" name="callBack" value="parent.web_login_callback" />
    </form>
  </div>
</template>
<script>
export default {
  methods:{
    close(){
      this.$emit("changeFlag",false)
    }
  },
  props:[
    "flag"
  ]
};
</script>
<style scoped>
.pop-box {
  margin: -215px 0 0 -400px;
  width: 800px;
  height: 450px;
  position: fixed;
  background-color: #fff;
  left: 50%;
  top: 50%;
  z-index: 999;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #a8abae;
}
.pop-close {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: url("../../assets/img/close.png") no-repeat 50%;
  background-size: 100%;
}
.pop-tit {
  margin: 0;
  line-height: 130px;
  font-size: 30px;
  color: #495056;
  padding-left: 60px;
}
.login {
  list-style: none;
  padding: 0 182px 35px;
}
.phone-login {
  list-style: none;
  padding: 0 182px 35px;
}
.phone-login-input {
  flex: 1;
  width: 305px;
  height: 24px;
  line-height: 20px;
  padding: 10px 15px 10px 30px;
  border: 1px solid #f5f5f7;
  font-size: 14px;
  color: #495056;
  font-family: microsoft yahei;
  background: #f5f5f7;
  -webkit-border-radius: 4px;
}
.phone-login-tit {
  font-size: 14px;
  color: #495056;
  line-height: 14px;
  width: 86px;
}
.phone-login li {
  height: 46px;
  padding-bottom: 15px;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.get-code {
  width: 120px;
  height: 46px;
  background: #f5f5f7;
  border: none;
  -webkit-border-radius: 4px;
  font-size: 16px;
  margin-left: 15px;
  color: #8a8d96;
  font-family: microsoft yahei;
}
.p-error {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #ff7e00;
  margin-top: -40px;
}
.sub-btn {
  cursor: pointer;
  -webkit-appearance: none;
  font: 12px/1.5 arial, helvetica, clean, sans-serif;
  line-height: 55px;
  display: block;
  width: 150px;
  height: 55px;
  border: none;
  font-size: 16px;
  margin: 0 auto;
  font-family: microsoft yahei;
  background: #3cb46d;
  -webkit-border-radius: 4px;
  color: #fff;
  margin-bottom: 15px;
}
.free-phone {
  margin-top: 15px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  text-align: center;
  color: #8a8d96;
  margin-bottom: 10px;
}
.agree-text {
  text-align: center;
  color: #8a8d96;
  font-size: 12px;
  line-height: 12px;
}
</style>