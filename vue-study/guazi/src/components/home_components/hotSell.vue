<template>
  <div class="hotSell">
    <div class="title">热卖车型</div>
    <ul class="index-carlist">
      <li
        v-for="(item,index) in title"
        :key="index"
        @mouseover="over(index), styleAdd($event.target,index)"
      >{{item}}</li>
    </ul>
    <div class="carlist-box">
      <ul class="carlist clearfix">
        <li v-for="(item,index) in result" :key="index">
          <carItem :item="item"></carItem>
        </li>
      </ul>
      <div class="index-carmore">
        <a
          href="/nc/buy/"
          rel="nofollow"
        >
          更多{{this.title[this.index]}}
          <i class="iconbg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import carItem from "@/components/common_components/carItem";
export default {
  data() {
    return {
      carlist: "|猜您喜欢|严选车|最新上架|降价急售|准新车|练手车|SUV",
      result: [],
      title: [],
      oldindex:0,
      index: 0
    };
  },
  created() {
    this.title = this.changeType(this.carlist);
    this.over();
  },
  beforeMount() {},
  mounted() {
    this.styleAdd();
  },
  watch: {},
  // beforeUpdate() {
  //   this.styleRemove(document.querySelector(".index-carlist").childNodes[this.index])
  //   // console.log(document.querySelector(".index-carlist").childNodes[this.index])
  // },
  components: {
    carItem
  },
  methods: {
    over(index = 0) {
      this.oldindex = this.index
      this.index = index;
      this.$http.get("http://localhost:8080/static/hotSell.json").then(res => {
        this.result = res.data.data[index];
      });
    },
    styleAdd(event = document.querySelector(".index-carlist li"), index = 0) {
      // console.log(document.querySelector(".index-carlist"));
      event.style.color = "#000";
      if(this.index !== this.oldindex)
      document.querySelector(".index-carlist").childNodes[this.oldindex].style.color = "#999"
      // console.log( document.querySelector(".index-carlist").childNodes[this.oldindex])
    }
  }
};
</script>
<style lang='' scoped>
.index-carlist {

  list-style: none;
  width: 1200px;
  padding-top: 30px;
  padding-bottom: 17.5px;
  height: 22.5px;
  margin: 0 auto;
}
.index-carlist li {
  display: inline-block;
  margin-right: 28px;
  font-size: 16px;
  color: #999;
  cursor: pointer;
  line-height: 16px;
}
.carlist-box {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.carlist {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  list-style: none;
  width: 1220px;
  margin-left: -20px;
}
.carlist li {
  list-style: none;
  float: left;
  background: #fff;
}
.hotSell {
    position: relative;
  top: -85px;
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: #f5f5f7;
}
.title {
  font-size: 28px;
  color: #000;
  width: 1200px;
  line-height: 28px;
  margin: 0 auto;
  padding-top: 52.5px;
}
.index-carmore {
  padding-top: 22px;
  padding-bottom: 52.5px;
  text-align: center;
  height: 14px;
}
.index-carmore a {
  font: 12px/1.5 PingFang SC, Microsoft YaHei, arial, helvetica, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  text-decoration: none !important;
  font-size: 14px;
  color: #495056;
  line-height: 14px;
}
.iconbg {
  font-style: normal;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png);
  background-size: 451px 300px;
  display: inline-block;
  width: 16px;
  height: 17px;
  vertical-align: top;
  margin-left: 10px;
  background-position: -183px 0;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>