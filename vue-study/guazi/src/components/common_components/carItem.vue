<template>
  <div class="carItem">
    <a href="#">
      <img v-lazy="item.imgSrc" alt />
      <div class="carInfo">
        <h2>{{item.carName}}</h2>
        <div class="t-i">
          {{item.carType.split("|")[0]}}
          <span>|</span>
          {{item.carType.split("|")[1]}}
          <span v-show="this.type">|</span>
          {{item.carType.split("|")[2]}}
        </div>
        <div class="t-price" ref="tPrice">
          <p>
            {{item.carPrice}}
            <span>万</span>
          </p>
          <i v-if="item.Red" class="i-red">{{this.item.Red}}</i>
          <i v-if="item.Blue" class="i-blue">{{this.item.Blue}}</i>
          <i v-if="item.Green" class="i-green">{{this.item.Green}}</i>
          <em class="line-through" ref="lineThrough">{{item.Line}}</em>
        </div>
      </div>
      <em class="icon-new" v-if="item.isNew">{{item.isNew}}</em>
      <em class="icon-sale" v-else-if="item.SaleWord">
        {{item.SaleWord}}
        <br />
        <span>{{item.Sale}}</span>
        {{item.Saleyuan}}
      </em>
    </a>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      year: "",
      distance: "",
      type: ""
    };
  },
  methods: {
    changeType() {
      // console.log(this.item);

      this.year = this.item.carType.split("|")[0];
      this.distance = this.item.carType.split("|")[1];
      this.type = this.item.carType.split("|")[2];
    }
    //   addDom() {
    //     if (this.item.Green) {
    //       var greenDom = document.createElement("i");
    //       greenDom.innerText = this.item.Green;
    //       // greenDom.style.color = "green";
    //       // greenDom.addClass("i-green")
    //       greenDom.classList.add("i-green");
    //       this.$refs.tPrice.insertBefore(greenDom, this.$refs.lineThrough);
    //     }
    //     if (this.item.Blue) {
    //       var blueDom = document.createElement("i");
    //       blueDom.innerText = this.item.Blue;
    //       blueDom.classList.add("i-blue");
    //       this.$refs.tPrice.insertBefore(blueDom, this.$refs.lineThrough);
    //     }
    //     if (this.item.Red) {
    //       var redDom = document.createElement("i");
    //       redDom.innerText = this.item.Red;
    //       redDom.classList.add("i-red");
    //       this.$refs.tPrice.insertBefore(redDom, this.$refs.lineThrough);
    //     }
    //   }
  },
  created() {
    this.changeType();
  },
  mounted() {},
  filters: {}
};
</script>
<style lang='' scoped>
.carItem {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  float: left;
  margin-left: 20px;
  margin-bottom: 19px;
  background: #fff;
}

.icon-new {
  font-style: normal;
  position: absolute;
  display: block;
  width: 60px;
  height: 55px;
  text-align: center;
  color: #fff;
  top: -5px;
  left: 11px;
  font-size: 12px;
  background-position: -36px -100px;
  line-height: 48px;
  padding: 0;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png);
  background-size: 451px 300px;
}
h2 {
  margin: 0;
  font-size: 17px;
  color: #495056;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 20px 20px 6px;
}
.carInfo {
  top: -3px;
  padding-bottom: 25px;
  position: relative;
  width: 100%;
  height: 126px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}
a {
  text-decoration: none !important;
  color: #24d;
  display: block;
  position: relative;
  transition: box-shadow 0.4s;
  width: 285px;
  height: 319px;
  padding: 0;
  background-color: #fff;
  border: none;
  overflow: hidden;
}
.t-i {
  color: #a5abb2;
  font-size: 14px;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
}
.line-through {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  font-size: 14px;
  float: left;
  margin-top: 7px;
  margin-left: 10px;
  color: #a5abb2;
  text-decoration: line-through;
}
.t-price {
  height: 30px;
  font-size: 20px;
  color: #fa5428;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
}
.t-price p {
  font-size: 20px;
  color: #fa5428;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  float: left;
  line-height: 30px;
}
.t-price i {
  width: 46px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  margin: 5px 0 0 5px;
}
.icon-sale {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  position: absolute;
  display: block;
  width: 60px;
  text-align: center;
  color: #fff;
  top: -5px;
  left: 11px;
  font-size: 12px;
  height: 40px;
  line-height: 17px;
  padding: 7px 0 10px;
  background-position: -100px -100px;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png);
  background-size: 451px 300px;
}
.i-red {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  list-style: none;
  padding: 0;
  border: 0;
  outline: 0;
  font-style: normal;
  float: right;
  width: 46px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  margin: 5px 0 0 5px;
  color: #f88368;
  background: #ffeae5;
}
.i-blue {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  list-style: none;
  padding: 0;
  border: 0;
  outline: 0;
  font-style: normal;
  float: right;
  width: 46px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  margin: 5px 0 0 5px;
  color: #d7a844;
  background: #fcf2d5;
}
.i-green {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  list-style: none;
  padding: 0;
  border: 0;
  outline: 0;
  font-style: normal;
  float: right;
  width: 46px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  margin: 5px 0 0 5px;
  color: #3fc56e;
  background: #e8f6ed;
}
</style>