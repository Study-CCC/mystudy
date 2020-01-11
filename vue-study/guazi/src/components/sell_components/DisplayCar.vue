<template>
  <div class="display-car">
    <div class="title">
      最新成交
      <i></i>
    </div>
    <div class="car">
      <div class="item">
        <img
          src="https://image.guazistatic.com/gz01191201/14/30/33a8c331d7c74fb75e8fd59896023e24.jpg@base@tag=imgScale&w=280&h=180&c=1&m=2&q=88"
          alt
        />
        <div class="desc">长安 奔奔 2015款 1.4L IMT豪华型</div>
        <div class="desc1">2016年 | 3.2万公里 | 成都</div>
        <div class="price">
          成交价
          <em>3.32万</em>
        </div>
        <div class="deal-day">
          3天
          <br />
          <em>卖出</em>
        </div>
      </div>
      <div class="item">
        <img
          src="https://image.guazistatic.com/gz01191130/20/17/eea5de356e5d9d0325f04d9cb2a74274.jpg@base@tag=imgScale&w=280&h=180&c=1&m=2&q=88"
          alt
        />
        <div class="desc">宝骏510 2017款 1.5L 自动豪华型</div>
        <div class="desc1">2016年 | 3.2万公里 | 成都</div>
        <div class="price">
          成交价
          <em>3.32万</em>
        </div>
        <div class="deal-day">
          4天
          <br />
          <em>卖出</em>
        </div>
      </div>
      <div class="item">
        <img
          src="https://image.guazistatic.com/gz01191201/08/44/30775e444aa4b0d496fca8b3e291f697.jpg@base@tag=imgScale&w=280&h=180&c=1&m=2&q=88"
          alt
        />
        <div class="desc">现代 瑞奕 2014款 1.4L 自动GLX</div>
        <div class="desc1">2016年 | 3.2万公里 | 成都</div>
        <div class="price">
          成交价
          <em>3.32万</em>
        </div>
        <div class="deal-day">
          2天
          <br />
          <em>卖出</em>
        </div>
      </div>
      <div class="item">
        <img
          src="https://image.guazistatic.com/gz01191203/10/34/24c572852ab1f2b53af8582fd0dfc3cc.jpg@base@tag=imgScale&w=280&h=180&c=1&m=2&q=88"
          alt
        />
        <div class="desc">丰田 花冠 2013款 1.6L 自动豪华版</div>
        <div class="desc1">2013年 | 3.9万公里 | 北京</div>
        <div class="price">
          成交价
          <em>5.79万</em>
        </div>
        <div class="deal-day">
          6天
          <br />
          <em>卖出</em>
        </div>
      </div>
    </div>
    <button>查看全部成交车源</button>
  </div>
</template>

<script>
export default {
  name: "DisPlayCar"
};
</script>

<style scoped>
.display-car {
  width: 1160px;
  margin: 0 auto;
  margin-top: 280px;
  text-align: center;
}
.title {
  font-size: 24px;
  color: #495056;
  line-height: 44px;
  text-align: center;
}
i {
  display: block;
  width: 28px;
  height: 3px;
  margin: 0 auto;
  line-height: 0;
  font-size: 0;
  background: #22ac38;
}
.car {
  display: flex;
  margin-top: 30px;
}
.item {
  flex: 1;
  position: relative;
}
.desc {
  font-size: 16px;
  color: #495056;
  padding-top: 15px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc1 {
  font-size: 14px;
  color: #a5abb2;
  line-height: 30px;
}
.price {
  font-size: 14px;
  color: #495056;
  line-height: 30px;
}
em {
  color: #f95523;
  font-size: 20px;
  margin-left: 4px;
}
button {
  width: 160px;
  height: 40px;
  border: none;
  background-color: #22ac38;
  color: white;
  font-size: 16px;
  margin: 50px;
}
.deal-day {
  position: absolute;
  top: -5px;
  right: 10px;
  width: 60px;
  height: 60px;
  background-position: -330px -130px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 22px;
  padding-top: 7px;
  background-image: url("../../assets/img/icon.4cc0b104c88b9d992a15d4cf86eab6a9.png");
  background-repeat: no-repeat;
}
.deal-day em {
  color: #fff;
  font-size: 14px;
  margin-left: -5px;
}
</style>