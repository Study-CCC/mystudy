<template>
  <div class="part" v-show="flag">
    <div class="carContent">
      <ul>
        <li v-for="(info,index) in carInfo" :key="index">
          <label>{{info.carInitial}}</label>
          <div class="carItems"><a href v-for="(a,b) in carInfo[index].carItem" :key="b">{{a}}</a></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carInfo: []
    };
  },
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.$http.get("http://localhost:8080/static/buySell.json").then(res => {
        res.data.allBrand.forEach(a => {
          this.carInfo.push({
            carInitial: a.carInitial,
            carItem: this.changeType(a.car)
          });
        });
      });
    }
  },
  props: ["flag"]
};
</script>
<style lang='' scoped>
.part {
  position: absolute;
  top: 166px;
  width: 1200px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 999;
  overflow: hidden;
}
.carContent {
  margin-top: 5px;
  margin-left: 10px;
}
.carContent ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 480px;
}
.carContent li {
  margin-top: 10px;
  width: 300px;
}
label {
  color: #22ab38;
  line-height: 24px;
}
.carContent li a {
  margin-left: 20px;
  white-space: nowrap;
  color: #495056;
  line-height: 24px;
}
</style>