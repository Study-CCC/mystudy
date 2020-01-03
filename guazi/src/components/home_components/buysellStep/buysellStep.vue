<template>
  <div class="index-buysell-step" ref="all">
    <div class="step-tab">
      <span
        class="active js-buyProcedure"
        @mouseenter="changeInfo($event.target)"
        ref="buy_car"
      >买车流程</span>
      <em>|</em>
      <span class="js-sellProcedure" @mouseenter="changeInfo($event.target)" ref="sale_car">卖车流程</span>
    </div>
    <div class="content" ref="con">
      <span class="title">{{this.showTitle}}</span>
      <span class="phone">{{this.showCon}}</span>
      <ul ref="oul">
        <li>
          <img class="phoneImg" src alt />
          <span>{{this.stepData[1].title}}</span>
          <i class="icon-step"></i>
        </li>
        <li>
          <img class="phoneImg" src alt />
          <span>{{this.stepData[2].title}}</span>
          <i class="icon-step"></i>
        </li>
        <li>
          <img class="phoneImg" src alt />
          <span>{{this.stepData[3].title}}</span>
          <i class="icon-step"></i>
        </li>
        <li>
          <img class="phoneImg" src alt />
          <span>{{this.stepData[4].title}}</span>
          <i class="icon-step"></i>
        </li>
      </ul>
    </div>
    <div class="slide-mask" ref="slide">
      <img src alt />
    </div>
    <div class="slide-area"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepData: {},
      showTitle: "",
      showCon: "",
      index: 1,
      timer: null
    };
  },
  created() {
    this.getInfo();
  },
  mounted() {
    this.getInfo("buystep", this.setImg);
  },
  methods: {
    getInfo(type = "buystep", fn) {
      this.$http.get("http://localhost:8080/static/step.json").then(res => {
        this.stepData = res.data[type];
        if (fn) {
          fn(type);
        }
      });
    },
    default() {
      var phoneImg = this.$refs.con.getElementsByClassName("phoneImg");
      var oli = this.$refs.oul.getElementsByTagName("li");
      var oslide = this.$refs.slide.getElementsByTagName("img");
      phoneImg[0].style.backgroundPosition = this.stepData[1].iconHover;
      this.showTitle = this.stepData[1].title;
      this.showCon = this.stepData[1].text;
      oslide[0].src = this.stepData[1].img;
    },
    setImg(type = "buystep") {
      var phoneImg = this.$refs.con.getElementsByClassName("phoneImg");
      var oli = this.$refs.oul.getElementsByTagName("li");
      var oslide = this.$refs.slide.getElementsByTagName("img");
      var all = this.$refs.all;
      // this.timer = setInterval(() => {
      //   this.index++;
      //   if (this.index == 5) this.index = 1;
      //   for (let i = 0; i < 4; i++)
      //     phoneImg[i].style.backgroundPosition = this.stepData[i + 1].icon;
      //   phoneImg[this.index - 1].style.backgroundPosition = this.stepData[
      //     this.index
      //   ].iconHover;
      //   this.showTitle = this.stepData[this.index].title;
      //   this.showCon = this.stepData[this.index].text;
      //   oslide[0].src = this.stepData[this.index].img;
      // }, 1500);
      all.addEventListener("mouseenter", () => {
        // console.log(11);
        clearInterval(this.timer);
      });
      all.addEventListener("mouseleave", () => {
        clearInterval(this.timer);
        // this.timer = setInterval(() => {
        //   this.index++;
        //   if (this.index == 5) this.index = 1;
        //   for (let i = 0; i < 4; i++)
        //     phoneImg[i].style.backgroundPosition = this.stepData[i + 1].icon;
        //   phoneImg[this.index - 1].style.backgroundPosition = this.stepData[
        //     this.index
        //   ].iconHover;
        //   this.showTitle = this.stepData[this.index].title;
        //   this.showCon = this.stepData[this.index].text;
        //   oslide[0].src = this.stepData[this.index].img;
        // }, 1500);
      });
      for (let i = 0; i < phoneImg.length; i++) {
        phoneImg[i].style.backgroundPosition = this.stepData[i + 1].icon;
        this.default();
        oli[i].addEventListener("mouseenter", () => {
          for (let i = 0; i < phoneImg.length; i++) {
            phoneImg[i].style.backgroundPosition = this.stepData[i + 1].icon;
          }
          this.index = i + 1;
          phoneImg[i].style.backgroundPosition = this.stepData[i + 1].iconHover;
          this.showTitle = this.stepData[i + 1].title;
          this.showCon = this.stepData[i + 1].text;
          oslide[0].src = this.stepData[i + 1].img;
        });
      }
    },
    changeInfo(target) {
      if (target.innerText == "买车流程") {
        this.$refs.sale_car.classList.remove("active");
        this.$refs.buy_car.classList.add("active");
        this.getInfo("buystep", this.setImg);
      } else {
        this.$refs.buy_car.classList.remove("active");
        this.$refs.sale_car.classList.add("active");
        this.getInfo("sellstep", this.setImg);
      }
    }
  },
  components: {}
};
</script>
<style lang='' scoped>
.index-buysell-step {
  position: relative;
  top: -50px;
  font-size: 14px;
  z-index: 1;
  height: 431.5px;
}
.step-tab {
  position: absolute;
  top: 67px;
  left: 50%;
  z-index: 11;
  width: 186px;
  margin-left: -546px;
}
.step-tab .active {
  border-bottom: 3px solid #22ac38;
}
.step-tab span {
  display: inline-block;
  width: 66px;
  font-size: 16px;
  color: #181818;
  padding-bottom: 6px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
}
.step-tab em {
  padding: 0 20px;
  color: #d2d2d2;
  font-style: normal;
}
.content {
  z-index: 999;
  position: absolute;
  left: 15%;
  top: 70%;
}
.content ul {
  display: flex;
}
.content ul li {
  margin-right: 60px;
  width: 56px;
  position: relative;
}
.icon-step {
  position: absolute;
  right: -35px;
  bottom: -4px;
  display: block;
  width: 13px;
  height: 10px;
  background: url(//cli-sta.guazistatic.com/c2c_web/next2.3d5a92aa1fec4ed61930edca0ea95564.png);
  background-size: 100% 100%;
}
.phoneImg {
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png);
  background-size: 451px 300px;
  height: 40px;
  width: 32px;
  margin: 0 auto;
  display: block;
  margin-bottom: 6px;
}
.title {
  position: absolute;
  top: -105px;
  left: 0;
  font-size: 40px;
}
.phone {
  font-size: 18px;
  position: absolute;
  top: -40px;
  left: 0;
}
.content span {
  display: block;
  color: #181818;
}
.slide-area {
  top: 0;
  left: -78px;
  z-index: 10;
  background: url(//cli-sta.guazistatic.com/c2c_web/mask.3642195d3f6eed370c899cc57e6f772e.png)
    no-repeat top;
  overflow: hidden;
}
.slide-mask img {
  z-index: 1;
}
.slide-area,
.slide-mask {
  position: absolute;
  width: 100%;
  height: 404px;
}
</style>