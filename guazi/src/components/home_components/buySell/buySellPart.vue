<template>
  <div class="part" v-show="flag">
    <i class="icon"></i>
    <div class="carContent">
      <ul>
        <li v-for="(info,index) in carInfo" :key="index">
          <label >{{info.carInitial}}</label>
          <a href="" v-for="(a,b) in carInfo[index].carItem" :key="b">{{a}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carInfo:[]
    };
  },
  created() {
    this.getDate()
  },
  methods:{
    getDate(){
      this.$http.get("http://localhost:8080/static/buySell.json").then(res => {
        res.data.allBrand.forEach(a => {
           this.carInfo.push({carInitial: a.carInitial,
          carItem:this.changeType(a.car)}) 
        });
      })
    },
    
  },
   props:[
    "flag"
  ],
};
</script>
<style lang='' scoped>
.part {
  position: absolute;
  top: 166px;
  width: 1200px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 999;
  overflow: hidden;
}
.icon {
  width: 12.5px;
  height: 6px;
  background: url(//cli-sta.guazistatic.com/c2c_web/sanjiao.a4a76d0….png)
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: -15px;
  left: 638px;
  border-top: 10px solid transparent;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
}
.carContent{
  margin-top: 10px;
  margin-left: 10px;
}
.carContent ul{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.carContent li{
  margin-top: 20px;
  width: 200px;
  white-space: nowrap;
}
label{
  color: #22ab38;
  line-height: 24px;
}
.carContent li a{
  margin-left: 20px;
}
</style>