<template>
  <div class="city-box-parent">
    <div class="class-scroll">
      <div class="city-box all-city">
        <cityBox
          class="city-box-left"
          :data="leftdata"
          :title="leftTit"
          :greenCity="leftCity"
          v-if="leftdata.length&&leftCity.length"
        ></cityBox>
        <cityBox
          class="city-box-right"
          :data="rightdata"
          :title="rightTit"
          :greenCity="rightCity"
          v-if="rightdata.length&&rightCity.length"
        ></cityBox>
      </div>
    </div>
  </div>
</template>

<script>
import cityBox from "./cityBox";
export default {
  components: {
    cityBox
  },
  data() {
    return {
      leftTit: "",
      leftCity: [],
      rightTit: "",
      rightCity: [],
      partType: "",
      leftdata: [],
      rightdata: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:8080/static/city.json").then(res => {
        this.leftTit = "周边";
        this.leftCity = this.changeType(res.data.surroundingCity);
        this.rightTit = "全国";
        this.rightCity = this.changeType(res.data.hotCity);
        // console.log(this.greenCity)

        // console.log(res.data.data)
        // console.log(this.cityName)
        let i = 0;
        for (var item in res.data.data) {
          if (i < 12) {
            this.leftdata.push({
              cityTit: item,
              cityName: res.data.data[item]
            });
          } else
            this.rightdata.push({
              cityTit: item,
              cityName: res.data.data[item]
            });
          i++;
        }
        console.log(this.leftdata);
      });
    }
  }
};
</script>
<style lang='' scoped>
.city-box-parent{
  font: 12px/1.5 PingFang SC,Microsoft YaHei,arial,helvetica,sans-serif;
margin: 0;
padding: 0;
border: 0;
outline: 0;
width: 100%;
position: absolute;
top: 55px;
z-index: 11;
background: #fff;
box-shadow: 0 1px 2px 0 hsla(0,0%,80%,.5);
}
.class-scroll {
    width: 1200px;
    margin: 0 auto;
}
.city-box-left {
  width: 50%;
  float: left;
  padding-bottom: 7.5px;
}
.city-box-right {
  width: 50%;
  padding-bottom: 7.5px;
  float: right;
}
.city-box .city-box-left, .city-box .city-box-right {
    width: 50%;
    float: left;
    padding-bottom: 7.5px;
}
.city-box {
  display: none;
    max-height: 453px;
    overflow-y: scroll;
}
</style>
