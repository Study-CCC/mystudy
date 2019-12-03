<template>
  <div class="footerpart" ref="footerpart">
    <p class="title">{{linktit}}</p>
    <span class="arrow close" @click="clickArrow" ref="arrow"></span>
    <a v-for="(item,index) in result" :key="index" class="linkcar_item" href="#">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: "",
  props: ['linktit', 'linkcar'],
  data() {
    return {
    //   linktit: "热门品牌：",
    //   linkcar:
    //     "|南昌二手东风小康|南昌二手大众|南昌二手本田|南昌二手丰田|南昌二手日产|南昌二手奔驰|南昌二手别克|南昌二手福特|南昌二手现代|南昌二手奥迪|南昌二手宝马|南昌二手起亚|南昌二手马自达|南昌二手雪佛兰|南昌二手哈弗|南昌二手吉利|南昌二手长安|南昌二手宝骏|南昌二手斯柯达|南昌二手标致|南昌二手比亚迪|南昌二手传祺|南昌二手荣威|南昌二手凯迪拉克|南昌二手雪铁龙|南昌二手路虎|南昌二手江淮|南昌二手雷克萨斯|南昌二手奇瑞|南昌二手Jeep|南昌二手五菱|南昌二手MINI|南昌二手众泰|南昌二手铃木|南昌二手沃尔沃",
      result: [],
      flag: false
    };
  },
  created() {
    // this.changeType();
       this.result = this.changeType(this.linkcar)
  },
  mounted() {
    this.$refs.footerpart.style.height = "28px";
  },
  methods: {
    //将获取数据转换成数组
    // changeType() {
    //   this.result = this.linkcar.split("|");
    //   this.result.shift();
    // },
    clickArrow() {
      this.flag = !this.flag;
      if (this.flag) {
        this.$refs.arrow.classList.remove("close");
        this.$refs.arrow.classList.add("open");
        this.$refs.footerpart.style.overflow = "visible";
        this.$refs.footerpart.style.height = "";
      } else {
        this.$refs.arrow.classList.remove("open");
        this.$refs.arrow.classList.add("close");
        this.$refs.footerpart.style.overflow = "hidden";
        this.$refs.footerpart.style.height = "28px";
      }
    }
  }
};
</script>
<style lang='' scoped>
.footerpart {
  width: 1100px;
  line-height: 28px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding: 0 0 0 90px;
}
.title {
  margin: 0;
  color: #666;
  left: 0;
  top: 0;
  width: 90px;
  height: 28px;
  font-size: 16px;
  position: absolute;
}
.linkcar_item {
  margin-right: 20px;
  display: inline-block;
  text-decoration: none;
  color: #666;
}
.arrow {
  background-repeat: no-repeat;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/global-3.bddc7dbcd1b47bf88946900826c9abf1.png);
  background-position: -70px -100px;
  position: absolute;
  right: 0;
  display: block;
  width: 16px;
  height: 9px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
}
.close {
  top: 10px;
}
.open {
  transform: rotate(180deg);
  bottom: 10px;
}
</style>