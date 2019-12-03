<template>
  <div>
      <!-- <Header></Header> -->
      <!-- <div class="index-header"></div> -->
      <!-- <Login></Login> -->
      <!-- <Footer></Footer> -->
      <!-- <City></City> -->
      <!-- <BuySell></BuySell> -->
      <!-- <newCar></newCar> -->
      <!-- <Problem></Problem> -->
      <!-- <buySellStep></buySellStep> -->
      <!-- <rightBox></rightBox> -->
      <!-- <hotSell></hotSell> -->
      <slideCar></slideCar>
  </div>
</template>
   
<script>
import Header from "@/components/common_components/header"
import Login from "@/components/common_components/login"
import Footer from "@/components/common_components/footer/footer"
import City from "@/components/common_components/city/city"
import BuySell from "@/components/home_components/buySell/buySell"
import hotSell from "@/components/home_components/hotSell"
import newCar from "@/components/home_components/newCar"
import Problem from "@/components/home_components/problem"
import buySellStep from "@/components/home_components/buysellStep/buysellStep"
import rightBox from '@/components/common_components/rightBox'
import slideCar  from '@/components/home_components/slideCar'
export default {
  name: "index",
  components: {
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
    };
  }
};
</script>

<style>
.index-header {
    position: relative;
    background: url("https://image.guazistatic.com/gz01190923/17/53/9c2d7bfaed19709bbbb9cb305e1ddffe.jpg") #07370d no-repeat;
    background-size: 1920px 100%;
    background-position: 50%;
    height: 340.5px;
    width: 100%;
    margin: 0 auto;
}
a{
  text-decoration: none !important;
      color: #24d;
}
li, ol, ul {
    list-style: none;
}
.w1200{
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