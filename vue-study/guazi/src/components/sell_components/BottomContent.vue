
<template>
  <div class="bottom-content">
    <div class="qa-box">
      <div class="con-tit">
        <p>瓜子问答</p>
        <i></i>
      </div>
      <ul class="qa-list">
        <li>
          <div class="qa-pic qa-pic-1"></div>
          <div class="qa-con">
            <p class="qa-t">
              Q1：卖车流程是怎样的？
              <i></i>
            </p>
            <p class="qa-txt">
              1、在本页填写卖车信息或拨打400-023-1529联系我们。
              <br />2、由检测师进行车辆信息收集，并经过瓜子评估，给出瓜子价参考，由车主确定发布报价。
              <br />3、达成交易合同，支付车款并过户。
              <br />
            </p>
          </div>
        </li>

        <li>
          <div class="qa-pic qa-pic-2"></div>
          <div class="qa-con">
            <p class="qa-t">
              Q2：卖车需要准备什么？
              <i></i>
            </p>
            <p
              class="qa-txt"
            >1、身份证；2、环保标；3、购置税本；4、行驶证；5、检字标；6、购置税发票；7、车辆登记证；8、交强险标；9、购车发票/最近一次过户发票；10、交强险单。</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomContent"
};
</script>

<style scoped>
.bottom-content {
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
}
.qa-box {
  width: 1250px;
  margin: 0 auto;
}
.qa-box .qa-list li {
  width: 500px;
  height: 190px;
  float: left;
  margin: 0 60px 0 35px;
  list-style: none;
}
.con-tit {
  padding-top: 30px;
}
.con-tit p {
  font-size: 24px;
  color: #495056;
  line-height: 44px;
  text-align: center;
}
.qa-list {
  margin-top: 30px;
}
.con-tit i {
  display: block;
  width: 28px;
  height: 3px;
  margin: 0 auto;
  line-height: 0;
  font-size: 0;
  background: #22ac38;
}
.qa-box .qa-list li .qa-con .qa-t {
  position: relative;
  display: inline-block;
  line-height: 36px;
  padding: 0 15px;
  background: #ebebeb;
  border-radius: 3px;
  font-size: 16px;
  color: #495056;
}
.qa-box .qa-list li .qa-con {
  float: right;
  width: 425px;
  padding-top: 12px;
}
.qa-box .qa-list li .qa-con .qa-txt {
  font-size: 14px;
  color: #a5abb2;
  padding-top: 10px;
  line-height: 30px;
}
.qa-box .qa-list li .qa-pic {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.qa-box .qa-list li .qa-pic.qa-pic-1 {
  background-position: -130px -220px;
  background-image: url("../../assets/img/icon.4cc0b104c88b9d992a15d4cf86eab6a9.png");
}

.qa-pic-2 {
  background-position: -190px -220px;
  background-image: url("../../assets/img/icon.4cc0b104c88b9d992a15d4cf86eab6a9.png");
}
.qa-box .qa-list li .qa-con .qa-t i {
  position: absolute;
  top: 13px;
  left: -11px;
  display: block;
  width: 1px;
  height: 1px;
  border: 5px solid transparent;
  border-right: 5px solid #ebebeb;
}
</style>