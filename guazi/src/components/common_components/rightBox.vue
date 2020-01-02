<template>
  <div>
    <a class="toolbar" id="toolbar" href="javascript:;">
      工
      <br />具
      <br />栏
    </a>
    <div class="right-nav">
      <div class="right-box">
        <div class="fix-icon app">
          <div class="app-bar">
            <span></span>
            <p>下载APP关注更多信息</p>
          </div>
        </div>
        <div class="fix-icon wechat">
          <div class="wx-bar">
            <span></span>
            <p>关注公众号了解更多信息</p>
          </div>
        </div>
        <div class="fix-icon feedback">
          <div class="feedback-bar">意见反馈</div>
        </div>
        <div class="fix-icon phone">
          <div class="phone-bar">免费咨询：400-060-6085</div>
        </div>
        <div class="fix-icon history">
          <div class="history-bar js-history">
            <h3 class="history-title">我看过的车</h3>
            <div class="history-source active">
              <div class="history-scroll">
                <ul class="history-list clearfix">
                  <li class="list-infoBox js-infoBox">
                    <a href="/nc/f18ee8d7a16c32a7x.htm" class="info-img">
                      <img
                        src="https://image1.guazistatic.com/qn190727165409929e485f4649f282d48632454ba563c7.jpg?imageView2/1/w/290/h/192/q/88"
                      />
                    </a>
                    <span class="icon-collect js-collect">收藏</span>
                    <a class="info-name" href="/nc/f18ee8d7a16c32a7x.htm">
                      <h2>宝马X5 xDrive35i 中东版</h2>
                    </a>
                    <p class="info-mile">
                      2018年3月上牌
                      <em>|</em>行驶2.3万公里
                    </p>
                    <p class="info-price">
                      <span class="price-curr">59.38万</span>
                    </p>
                  </li>
                  <li class="list-infoBox js-infoBox">
                    <a href="/nc/b902e0931cd89e18x.htm" class="info-img">
                      <img
                        src="https://image.guazistatic.com/gz01191009/19/12/abe9ddbe76d5f80ac38736686d4a2592.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88"
                      />
                    </a>
                    <span class="icon-collect js-collect">收藏</span>
                    <a class="info-name" href="/nc/b902e0931cd89e18x.htm">
                      <h2>保时捷Panamera 2019款 Panamera 行政加长版 2.9T</h2>
                    </a>
                    <p class="info-mile">
                      2019年6月上牌
                      <em>|</em>行驶0.3万公里
                    </p>
                    <p class="info-price">
                      <span class="price-curr">130.00万</span>
                      <span class="price-through"></span>
                    </p>
                  </li>
                  <li class="list-infoBox js-infoBox">
                    <a href="/nc/9f81956aa92ea3d5x.htm" class="info-img">
                      <img
                        src="https://image.guazistatic.com/gz01190906/20/40/e2ee045b0b222f1c0f871b44f049e23b.jpg@base@tag=imgScale&amp;w=290&amp;h=192&amp;c=1&amp;m=2&amp;q=88"
                      />
                    </a>
                    <span class="icon-collect js-collect">收藏</span>
                    <a class="info-name" href="#">
                      <h2>五菱 五菱之光 2008款 1.0L标准型</h2>
                    </a>
                    <p class="info-mile">
                      2012年11月上牌
                      <em>|</em>行驶8.3万公里
                    </p>
                    <p class="info-price">
                      <span class="price-curr">0.40万</span>
                      <a class="info-off" href="#">
                        <span class="icon-off-sale active">已售</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="history-btn js-checkall">
                <a href="javascript:">查看全部</a>
                <span class="icon-triangle17x17"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="fix-icon backtop"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      flag: true,
      width:0
    };
  },
  methods: {
    addHover(a) {
      a.addEventListener("mouseenter", function(e) {
        a.firstElementChild.style.display = "block";
      });
      a.addEventListener("mouseleave", e => {
        a.firstElementChild.style.display = "none";
      });
    },
    addStyle() {
      const icons = document.querySelectorAll(".fix-icon");
      const history = icons[icons.length-2];
      // console.log(icons)
      for (let i = 0; i < icons.length - 2; i++) {
        this.addHover(icons[i]);
      }
      history.addEventListener("mouseenter", e => {
        history.classList.add("historyActive");
        history.firstElementChild.style.display = "block";
      });
      history.addEventListener("mouseleave", e => {
       setTimeout(()=>{
         history.firstElementChild.addEventListener("mouseenter",e=>{
           this.a = 2
          //  console.log(2)
         })

         history.firstElementChild.addEventListener("mouseleave",e=>{
           this.a = 3
           history.classList.remove('historyActive');
           history.firstElementChild.style.display = 'none'
         })
         if(this.a==1)
         {
           history.classList.remove('historyActive');
           history.firstElementChild.style.display = 'none'
         }
       },100)
      });
    },
    isHidden() {
      // console.log(document.body.clientWidth)
      if (document.body.clientWidth <= 1300) {
        document.getElementsByClassName("toolbar")[0].style.display = "block";
        document.getElementsByClassName("right-nav")[0].style.display = "none";
      } else {
        document.getElementsByClassName("toolbar")[0].style.display = "none";
        document.getElementsByClassName("right-nav")[0].style.display = "block";
      }
      document
        .getElementsByClassName("toolbar")[0]
        .addEventListener("click", () => {
          if (this.flag) {
            this.flag = !this.flag;
            document.getElementsByClassName("right-nav")[0].style.display =
              "block";
            document.getElementsByClassName("toolbar")[0].style.right =
              40 + "px";
            document
              .getElementsByClassName("toolbar")[0]
              .classList.add("click");
          } else {
            this.flag = !this.flag;
            document.getElementsByClassName("toolbar")[0].style.display =
              "block";
            document.getElementsByClassName("right-nav")[0].style.display =
              "none";
            document.getElementsByClassName("toolbar")[0].style.right =
              0 + "px";
            document
              .getElementsByClassName("toolbar")[0]
              .classList.remove("click");
          }
        });
    },
    topBack(){
      
    }
  },
  mounted() {
    this.isHidden()
    this.addStyle();
    let _this = this;
    window.onresize = function () {
      _this.isHidden()
      // console.log('123')
    }
  }
};
</script>
<style lang='' scoped>
.right-nav {
  height: 100%;
  width: 40px;
  background-color: #2a2c3c;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}
.app-bar span,
.fix-icon,
.fix-icon-list .icon-sell-txt,
.fix-icon-subscribe,
.history-bar i,
.icon-triangle17x17,
.wx-bar span,
a.toolbar:after {
  background: url("../../assets/img/side-bar@2x.png") no-repeat;
  background-size: 259px 361px;
}
a.toolbar {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  width: 26px;
  height: 74px;
  background-color: #434857;
  color: #fff;
  position: absolute;
  right: 0;
  top: 45%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  text-align: center;
  line-height: 14px;
  padding-top: 10px;
  display: none;
}
.click::after {
  content: "";
  width: 6px;
  height: 11px;
  display: inline-block;
  position: absolute;
  bottom: 15px;
  left: 10px;
  background-position: -252px -1px !important;
}
a.toolbar:after {
  content: "";
  width: 6px;
  height: 11px;
  display: inline-block;
  position: absolute;
  bottom: 15px;
  left: 10px;
  background-position: -252px -18px;
}
.fix-icon {
  position: absolute;
  right: 0;
  top: 32%;
  z-index: 110;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.app {
  background-position: -55px 7px;
}
.app:hover {
  background-position: 10px 7px;
}
.wechat {
  margin-top: 45px;
  background-position: -55px -35px;
}
.wechat:hover {
  background-position: 10px -35px;
}
.feedback {
  margin-top: 90px;
  background-position: -55px -120px;
}
.feedback:hover {
  background-position: 10px -120px;
}
.phone {
  margin-top: 135px;
  background-position: -55px -77px;
}
.phone:hover {
  background-position: 10px -77px;
}
.history {
  margin-top: 180px;
  background-position: -55px -169px;
}
.historyActive {
  background-position: 10px -169px;
}
.backtop {
  margin-top: 225px;
  background-position: -55px -207px;
}
.backtop:hover {
  background-position: 10px -207px;
}
.fix-icon:hover {
  background-color: #3f4251;
}
.app-bar,
.feedback-bar,
.history-bar,
.phone-bar,
.wx-bar {
  display: none;
  background-color: #fff;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  box-shadow: 0 0 12px 1px rgba(88, 100, 117, 0.3);
  -webkit-box-shadow: 0 0 12px 1px rgba(88, 100, 117, 0.3);
  position: absolute;
  font-size: 14px;
  color: #495056;
}
.phone-bar {
  top: -3px;
  left: -288px;
  padding: 0 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.feedback-bar {
  top: -3px;
  left: -156px;
  padding: 0 40px;
  height: 55px;
  line-height: 55px;
  text-align: center;
}
.app-bar p,
.wx-bar p {
  padding-top: 10px;
  font-size: 14px;
}
.app-bar span,
.wx-bar span {
  display: inline-block;
  width: 117px;
  height: 117px;
  margin-top: 25px;
  background: url("../../assets/img/QRcode.png") no-repeat;
  background-size: 100% 100%;
}
.app-bar,
.wx-bar {
  top: -80px;
  left: -260px;
  width: 240px;
  height: 209px;
  text-align: center;
}
.history-bar {
  top: -375px;
  left: -671px;
  width: 651px;
  height: 600px;
  border-radius: 3px;
  cursor: default;
  background: #f5f5f7;
}
.history-title {
  font-size: 20px;
  color: #495056;
  font-weight: 400;
  padding: 29px 0 19px 25px;
}
.history-scroll {
  position: relative;
  height: 456px;
  padding-left: 20px;
  overflow-y: auto;
}
.history-btn {
  padding-top: 20px;
  text-align: center;
}
.history-btn a,
.history-btn a:hover {
  display: inline-block;
  font-size: 16px;
  color: #495056;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
}
.icon-triangle17x17 {
  background-position: -212px -14px;
  width: 17px;
  height: 17px;
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
  margin-top: 4px;
}
.history-source .list-infoBox {
  position: relative;
  float: left;
  width: 285px;
  height: 314px;
  margin: 0 15px 20px 5px;
  background: #fff;
  border: 1px solid #f5f5f7;
}
.icon-collect,
.icon-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
  width: 30px;
  height: 30px;
  white-space: nowrap;
  text-indent: -100px;
  overflow: hidden;
  background: url("/src/assets/img/collect.png") no-repeat 0 -80px;
  cursor: pointer;
}
.history-source .info-img img {
  display: block;
  width: 285px;
  height: 190px;
}
.history-source .info-name {
  display: block;
  padding: 25px 20px 8px;
}
.info-name h2 {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  line-height: 1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.history-source .info-mile {
  padding: 0 20px;
  font-size: 14px;
  color: #a5abb2;
}
.info-mile em {
  margin: 0 10px;
  color: #ddd;
}
.history-source .info-price {
  padding: 0 10px;
}
.price-curr {
  margin-right: 5px;
  font-size: 20px;
  color: #f76367;
}
</style>