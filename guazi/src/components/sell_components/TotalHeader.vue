<template>
  <div class="total-header">
    <div class="nav"></div>
    <div class="title">瓜子二手车&nbsp;&nbsp;二手车行业行业领军者</div>
    <div class="phone-area">
      <input class="phone-input" placeholder="请输入手机号码，6744万车主已提交" />
      <button class="phone-btn-1">高价卖车</button>
      <button class="phone-btn-2">快速估价</button>
    </div>
    <div class="new-car-entr">
      <a href="https://xinche.guazi.com/www/fyc" title>首付10%，厂商直供，爆款新车开回家 去抢购&ensp;&gt;</a>
    </div>
    <mid-content />
  </div>
</template>

<script>
import MidContent from "./MidContent";

export default {
  name: "ToatlHeader",
  components: {
    MidContent
  }
};
</script>

<style scoped>
.total-header {
  height: 660px;
  background: url("../../assets/img/sell-bg.290289564e5360959be1857de09bf8c4.jpg")
    no-repeat;
  background-position: -200px;
}
.nav {
  height: 55px;

}
.title {
  color: #fff;
  font-size: 44px;
  text-align: center;
  padding-top: 55px;
  height: 80px;
  line-height: 80px;
}
.phone-area {
  position: relative;
  z-index: 1;
  width: 975px;
  height: 56px;
  padding-top: 48px;
  padding-left: 225px;
  margin: 0 auto;
}
.phone-input {
  float: left;
  width: 408px;
  height: 18px;
  padding: 19px 15px;
  line-height: 18px;
  color: #495056;
  font-size: 18px;
  font-family: "microsoft yahei";
  border: none;
  background: #fff;
}
.phone-btn-1 {
  background: #22ac38;
  margin-right: 15px;
}
.phone-btn-2 {
  background: #6ac579;
  margin-right: 15px;
}
.phone-btn-1,
.phone-btn-2 {
  float: left;
  width: 148px;
  height: 56px;
  border: none;
  font-size: 20px;
  font-family: "microsoft yahei";
  color: #fff;
}
.new-car-entr {
  width: 400px;
  height: 26px;
  line-height: 26px;
  margin: 30px auto;
  font-size: 18px;
  color: #fff;
  padding-left: 34px;
  background-image: url("../../assets/img/icon.4cc0b104c88b9d992a15d4cf86eab6a9.png");
  background-repeat: no-repeat;
  background-position: -400px -130px;
}
.new-car-entr a {
  color: #fff;
  text-decoration: none;
}
</style>