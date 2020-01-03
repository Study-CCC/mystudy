<template>
  <div>
    <ScollHeader v-show="flag"></ScollHeader>
    <Header></Header>
    <div class="index-header"></div>
    <BuySell></BuySell>
    <slideCar></slideCar>
    <hotSell></hotSell>
    <newCar></newCar>
    <buySellStep></buySellStep>
    <Problem></Problem>
    <rightBox :flagTop="flag" @scollTop="scollTop"></rightBox>
    <Footer></Footer>
  </div>
</template>
   
<script>
import ScollHeader from "@/components/home_components/scollHeader"
import Header from "@/components/common_components/header";
import Login from "@/components/common_components/login";
import Footer from "@/components/common_components/footer/footer";
import City from "@/components/common_components/city/city";
import BuySell from "@/components/home_components/buySell/buySell";
import hotSell from "@/components/home_components/hotSell";
import newCar from "@/components/home_components/newCar";
import Problem from "@/components/home_components/problem";
import buySellStep from "@/components/home_components/buysellStep/buysellStep";
import rightBox from "@/components/common_components/rightBox";
import slideCar from "@/components/home_components/slideCar";
export default {
  name: "index",
  components: {
    ScollHeader,
    Header,
    Login,
    Footer,
    City,
    BuySell,
    hotSell,
    newCar,
    Problem,
    buySellStep,
    rightBox,
    slideCar
  },
  data() {
    return {
      flag:false
    };
  },
  mounted(){
    window.onmousewheel=()=>{
      this.changeFlag()
    }
  },
methods: {
  changeFlag(){
    // console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop>=200)
    this.flag=true
    else this.flag=false
  },
  scollTop(){
    document.documentElement.scrollTop=0
    this.flag=false
    // console.log(3333)
  }
},
};

</script>

<style>
.index-header {
  position: relative;
  background: url("https://image.guazistatic.com/gz01190923/17/53/9c2d7bfaed19709bbbb9cb305e1ddffe.jpg")
    #07370d no-repeat;
  background-size: 1920px 100%;
  background-position: 50%;
  height: 340.5px;
  width: 100%;
  margin: 0 auto;
  z-index: -1;
}
a {
  text-decoration: none !important;
  color: #24d;
}
li,
ol,
ul {
  list-style: none;
}
.w1200 {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>