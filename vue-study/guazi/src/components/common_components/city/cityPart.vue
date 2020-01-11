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
    };
  },
  updated(){
  }
  ,
  methods:{
    data(){
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