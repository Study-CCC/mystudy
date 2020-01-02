<template>
  <div class="mid-content">
    <div class="title">瓜子保卖服务</div>
    <div class="flex">
      <div>
        <img src="../assets/img/671fea951952dcbdef5fea9e51237e8f.png" alt />
        <div class="ltitle">当天拿钱</div>
        <div class="lcontent">
          最低可得50%
          <br />过户得余款
        </div>
      </div>
      <div>
        <img src="../assets/img/278e319a1545be59efd577a7ff5c3644.png" alt />
        <div class="ltitle">快速高价</div>
        <div class="lcontent">
          面向全国买家
          <br />锁定最优价格
        </div>
      </div>
      <div>
        <img src="../assets/img/15d9e5e449618a43e2ac290bea9b33a5.png" alt />
        <div class="ltitle">托管省心</div>
        <div class="lcontent">
          专人帮你卖车
          <br />省时省力
        </div>
      </div>
    </div>
    <div class="detail">
      查看详情介绍
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidContent"
};
</script>

<style scoped>
.mid-content {
  width: 80%;
  height: 460px;
  background-color: #fff;
  margin: 70px auto;
}
.title {
  font-size: 32px;
  color: #22ac38;
  line-height: 48px;
  text-align: center;
  height: 48px;
  padding-top: 50px;
}
.flex {
  display: flex;
  margin-top: 40px;
}
.flex div {
  flex: 1;
  text-align: center;
}
.flex div .ltitle {
  margin-top: 20px;
  margin-bottom: 12px;
  color: #373b3f;
  font-size: 20px;
}
.detail {
  display: block;
  width: 150px;
  height: 24px;
  margin: 0 auto;
  line-height: 24px;
  font-size: 14px;
  color: #22ac38;
  text-align: center;
  margin-top: 30px;
}
i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAT5JREFUKBVjZEAC6hutef/+/Vfy7x+DHyMDgwpI6j8Dwx0mJoZNzMxMPTf9j36GKQfKQ4DyOiun////z2P4/18eJoZCMzI+ZGRkTLobdGwfSBysEaLp3x6g8XCDUDTBOIwM/xkZmVxAmplAzoPYhNAkwyXJMM2inYGNiRWmBUIDDQapBelhAvkJ3XlPvj1nuPT+GsN0y04smv/Lg/Qw/fv/3x/VWAhvxs3FDKffnMeqGRR4TIz/GZWxaQSJ4dIMCnEmXJpg4pse7WJQ51MGY5gYiGYCxROyADJbklOMYa5NH0PZmWaGyx9uwKUgcQuMXLgIEkOKU5xhnk0/Q/OFfoZjr88gyQBtA+phAqUIBmDkIsuIcYiAbcKmCaQWpAdrAgDFH8hfyM4DG4yUAOAphawkB3MmPJED4xYWTbgSOQDbkZfjGWXyMQAAAABJRU5ErkJggg==)
    no-repeat;
  vertical-align: -2px;
  margin-left: 10px;
}
.lcontent {
  font-size: 16px;
  color: #7a838d;
}
</style>