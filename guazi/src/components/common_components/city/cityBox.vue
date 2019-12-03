<template>
  <div class="cityBox">
    <dl class="bdb-n">
      <cityPart
        :title="title"
        :cityName="greenCity"
      ></cityPart>
    </dl>
    <div>
      <cityPart
        v-for="(item,index) in data"
        :key="index"
        :title="item.cityTit"
        :cityName="item.cityName"
      ></cityPart>
    </div>
  </div>
</template>

<script>
import cityPart from "./cityPart";
export default {
  data() {
    return {
    };
  },
  props:[
   'data',
    "title",
    "greenCity"
  ],
  created(){
  },
  components:{
    cityPart
  },
  methods: {
  
  }
};
</script>
<style lang='' scoped>
.city-box .city-box-left,
.city-box .city-box-right {
  width: 50%;
  float: left;
  padding-bottom: 7.5px;
}
.city-box dl.bdb-n,
.city-box dl.bdb-s {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 17.5px;
  position: relative;
}
.city-box dt.green-tit {
  color: #3cb46d;
  width: 43px;
}
.city-box dd {
  float: left;
  width: 501px;
  line-height: 29px;
}
.city-box a {
  float: left;
  color: #495056;
  font-size: 14px;
  margin-right: 15px;
  white-space: nowrap;
}
.city-box dl.bdb-n:after {
  content: "";
  background-color: #e8f0ea;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}
</style>