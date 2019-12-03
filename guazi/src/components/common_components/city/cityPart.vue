<template>
  <div class="cityPart">
    <div class="cityTitle">{{title}}</div>
    <div class="cityGroup">
      <a href="#" class="cityLink" v-for="(item,index) in cityName" :key="index">{{item.name||item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "cityName"],
  data() {
    return {
      // title:'',
      // cityName:[],
      //   A: [
      //     {
      //       id: 102089,
      //       domain: "anji",
      //       name: "\u5b89\u5409",
      //       firstC: "A",
      //       active: false
      //     },
      //     {
      //       id: 39,
      //       domain: "anshun",
      //       name: "\u5b89\u987a",
      //       firstC: "A",
      //       active: false
      //     },
      //     {
      //       id: 57,
      //       domain: "anshan",
      //       name: "\u978d\u5c71",
      //       firstC: "A",
      //       active: false
      //     },
      //     {
      //       id: 109,
      //       domain: "anyang",
      //       name: "\u5b89\u9633",
      //       firstC: "A",
      //       active: false
      //     },
      //     {
      //       id: 127,
      //       domain: "anqing",
      //       name: "\u5b89\u5e86",
      //       firstC: "A",
      //       active: false
      //     },
      //     {
      //       id: 184,
      //       domain: "ankang",
      //       name: "\u5b89\u5eb7",
      //       firstC: "A",
      //       active: false
      //     }
      //   ]
    };
  },
  updated(){
  }
  ,
  methods:{
    data(){
      console.log(this.title)
      console.log(this.cityName)
    }
  }
};
</script>
<style lang='' scoped>
.cityPart {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
.cityTitle {
  float: left;
  margin-right: 15px;
  line-height: 29px;
  color: #22ab38;
  font-size: 14px;
}
.cityGroup {
  width: 501px;
  float: left;
}
.cityLink {
  text-decoration: none !important;
  color: #495056;
  font-size: 14px;
  margin-right: 15px;
  line-height: 29px;
  white-space: nowrap;
}
.city-box .cityPart {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
}
</style>