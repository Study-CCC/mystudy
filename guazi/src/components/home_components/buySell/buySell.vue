<template>
  <div class="buySell">
    <!-- 买车 s -->
    <div class="entry-buycar fl">
      <div class="entry-title clearfix">
        <a href="#" class="fl">
          我要买车
          <i class="icon-buysell"></i>
        </a>
        <div class="search">
          <div class="index-title"></div>
          <div class="search-box suggestion_widget autocomplete" data-default-count="9">
            <input
              type="text"
              class="search-input js_search_input_index"
              placeholder="请输入关键词，例如：君越  2.4L"
              data-role="keywordInput"
              name="keyword"
              autocomplete="off"
              data-domain="bj"
              data-gzlog="tracking_type=click&amp;eventid=92743472"
            />
            <button
              class="search-btn"
              data-gzlog="tracking_type=click&amp;eventid=0020070000000022"
              type="button"
            >搜索</button>
            <input type="hidden" value="bj" name="hiddenCity" />
            <div class="autocomplete-dropdown">
              <ul>
                <li class="item">
                  <span class="hot-tip">热门推荐</span>
                </li>
                <li class="item">大众</li>
                <li class="item">福特</li>
                <li class="item">别克</li>
                <li class="item">SUV</li>
                <li class="item">现代</li>
                <li class="item">雪佛兰</li>
                <li class="item">丰田</li>
                <li class="item">日产</li>
                <li class="item">起亚</li>
              </ul>
            </div>
          </div>
          <!-- <ul class="search-select" style="display: none;">
                    <li class="select-tit">热门推荐</li>
                    <li>大众</li>
                    <li>大众</li>
                    <li>大众</li>
                    <li>大众</li>
          </ul>-->
        </div>
      </div>
      <div class="buycar-brand clearfix">
        <a href="#" v-for="(item,index) in group" :key="index">
          <img :src="item.buycarBrandImg" alt />
          {{item.buycarBrand}}
        </a>
        <a href="#">全部品牌</a>
      </div>
      <div class="buycar-brand clearfix">
        <a href="#" v-for="(item,index) in carPrice" :key="index">{{item}}</a>
        <a href="#" v-for="item in carType" :key="item">{{item}}</a>
        <a href="#"></a>
      </div>
    </div>
    <div class="entry-sellcar fr">
      <div class="sunhonglei"></div>
      <div class="entry-title1 clearfix">
        <a href="#" class="fl">
          我要卖车
          <i class="icon-buysell"></i>
        </a>
        <div class="sellcar-show fr">
          <p class="amount">瓜子保卖，当天拿钱，全程服务</p>
        </div>
      </div>

      <div class="sellcar-box">
        <!-- 文本框输入错误时加active -->
        <div class="sellcar-phone js-sellcar-phone clearfix onblue">
          <input class="phone-input js-phone-input js-phone1" maxlength="11" placeholder="请输入您的手机号" />
          <div class="phone-btn-right js-phone-btn" position="4">预约卖车</div>
          <p class="phone-error js-phone-error"></p>
          <button class="phone-btn-sell js-subAssess">爱车估价</button>
          <a href="#" target="_blank">
            <button class="phone-btn-eval">保卖服务</button>
          </a>
          <!-- https://www.guazi.com/bj/sellAssureIntro -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buycarBrand: "",
      buycarBrandImg: "",
      group: [],
      allBrand: [],
      carPrice: [],
      carType: [],
      result: []
    };
  },
  created() {
    this.$http.get("http://localhost:8080/static/buySell.json").then(res => {
      this.group = res.data.buyCar;
      this.carPrice = this.changeType(res.data.carPrice);
      this.carType = this.changeType(res.data.carType);
    });
  },
  methods: {}
};
</script>
<style lang='' scoped>
.buySell {
  position: relative;
  top: 242.5px;
  z-index: 3;
  height: 271.5px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #dfe3e3;
  border-top: 0;
  box-shadow: 0 1px 4px 0 rgba(88, 100, 117, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.entry-title {
  padding-top: 42.5px;
  padding-left: 42.5px;
}
.entry-title1 {
  padding-left: 0;
  padding-bottom: 9px;
  height: 45px;
  font-size: 22px;
  color: #181818;
  letter-spacing: 0.75px;
  overflow: hidden;
  padding-top: 43.5px;
  background: #fff;
}
.entry-title a,
.entry-title1 a {
  text-decoration: none;
  font-size: 22px;
  color: #181818;
  letter-spacing: 0.75px;
  line-height: 22px;
  font-weight: 700;
}
.f1 {
  float: left;
}
.fr {
  float: right;
}
.entry-buycar {
  float: left;
  width: 728px;
}
.icon-buysell {
  color: #181818;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 12px;
  background: url(//cli-sta.guazistatic.com/c2c_web/Rectangle.357eba9c280a5e98477546102349bcdc.png);
  background-size: 100% 100%;
  margin: -4px 0 0 10px;
}
.entry-sellcar {
  float: right;
  width: 377.5px;
  padding-right: 42.5px;
}
.sellcar-show {
  float: right;
  position: relative;
  font-size: 14px;
  color: #181818;
  text-align: right;
  height: 26px;
  line-height: 27px;
}
.phone-input {
  float: left;
  width: 223px;
  height: 28px;
  line-height: 28px;
  padding: 13px 10px 12px 20px;
  font-size: 16px;
  color: #495056;
  background: #f5f5f7;
  border: 1px solid #f5f5f7;
  border-radius: 4px;
  margin-bottom: 20px;
}
.search-input {
  width: 70%;
  height: 44px;
  margin-top: 7.5px;
  line-height: 44px;
  padding-left: 20px;
  padding-right: 0;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  outline: none;
}
.search-btn {
  line-height: 51px;
  margin-top: 3px;
  margin-right: 3px;
  height: 51px;
  width: 105px;
  padding: 0;
  background: #3cb46d;
  border-radius: 0 4px 4px 0;
  text-align: center;
  font-size: 18px;
  color: #fff;
  border: none;
  float: right;
}
.phone-btn-right {
  width: 114px;
  line-height: 54px;
  background: #3cb46d;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  float: right;
}
.phone-btn-sell {
  float: left;
  width: 188.5px;
  height: 57px;
  line-height: 57px;
  font-size: 16px;
  color: #3cb46d;
  background: #f0fff6;
  border: 1px solid #3cb46d;
  border-right: none;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  padding: 0;
}
.phone-btn-eval {
  float: left;
  width: 188.5px;
  height: 57px;
  line-height: 57px;
  font-size: 16px;
  color: #3cb46d;
  background: #f0fff6;
  border: 1px solid #3cb46d;
  box-sizing: border-box;
  padding: 0;
  border-left: none;
  border-right: 1px solid #3cb46d;
  border-radius: 0 4px 4px 0;
  position: relative;
}
.buycar-brand {
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  padding-top: 17px;
  padding-bottom: 5px;
  padding-left: 20px;
}
.buycar-brand a {
  text-decoration: none !important;
  float: left;
  width: 100px;
  line-height: 22px;
  color: #181818;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  margin-top: 13px;
}
.buycar-brand a img {
  line-height: 22px;
  color: #181818;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  width: 24px;
  height: 24px;
  vertical-align: top;
  margin-top: -1px;
  margin-right: 3px;
}
.sellcar-phone .phone-input:hover {
  border: 1px solid #e5e5e5;
}
a:hover {
  color: #22ac38;
}
.phone-btn-right:hover {
  background: #349b5e;
}
.phone-btn-eval:before {
  content: "";
  width: 1px;
  height: 14px;
  margin-top: 21.5px;
  position: absolute;
  left: 0;
  display: inline-block;
  background: #3cb46d;
}
.phone-btn-eval:hover,
.phone-btn-sell:hover {
  color: #349b5e;
}
.sunhonglei {
  width: 228.5px;
  height: 281.5px;
  background: url("https://image.guazistatic.com/gz01190927/18/46/ed7b16246227fcefc92fdfde6e183798.png");
  background-size: 100% 100%;
  position: absolute;
  top: -203px;
  right: 116px;
  z-index: -1;
}
.search {
  float: right;
  width: 655px;
  height: 57px;
  margin-top: 0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  position: absolute;
  top: -95px;
  left: 162.5px;
}
.search .index-title {
  width: 574px;
  height: 32px;
  background: url(//cli-sta.guazistatic.com/c2c_web/index-text.d79aa1230c0bba30025efe2f93187609.png);
  background-size: 100% 100%;
  position: absolute;
  top: -54.5px;
}
.search .search-box {
  border: none;
}
.autocomplete {
  position: relative;
}
.autocomplete .autocomplete-dropdown {
  display: none;
  position: absolute;
  left: 0;
  margin: 0;
  padding: 5px 0;
  z-index: 9998;
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #22ac38;
  box-shadow: 2px 2px 3px #eee;
  color: #000;
  overflow: auto;
  _overflow-x: hidden;
  text-align: left;
}
.search-box {
  width: 100%;
  height: 57px;
}
.index-entry-buysell {
  position: relative;
  top: 242.5px;
  z-index: 3;
  height: 271.5px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #dfe3e3;
  border-top: 0;
  box-shadow: 0 1px 4px 0 rgba(88, 100, 117, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
</style>