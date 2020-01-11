<template>
  <div class="buy">
    <HeadScoll v-show="flag"></HeadScoll>
    <Header class="head"></Header>
    <div class="header"></div>
    <div class="top-banner-app"></div>
    <List @search="search"></List>
    <CarCon :firstNum="firstNum" :secondNum="secondNum"></CarCon>
    <Footer></Footer>
    <rightBox :flagTop="flag" @scollTop="scollTop" :sellShow="sellShow"></rightBox>
  </div>
</template>

<script>
import Header from "@/components/common_components/header";
import List from "@/components/buy_components/list/list";
import CarCon from "@/components/buy_components/carCon";
import Footer from "@/components/common_components/footer/footer";
import HeadScoll from "@/components/buy_components/headScoll";
import rightBox from "@/components/common_components/rightBox";
export default {
  data() {
    return {
      flag: false,
      sellShow:true,
      firstNum:0,
      secondNum:0
    };
  },
  mounted() {
     document.addEventListener(
      "mousewheel",
      event => {
        this.changeFlag()
      },
      false
    );

  },
  methods: {
    changeFlag() {
      // console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop >= 200) this.flag = true;
      else this.flag = false;
    },
    search(a,b){
      this.firstNum=b;
      this.secondNum=a;
      
    },
    scollTop() {
      document.documentElement.scrollTop = 0;
      this.flag = false;
      // console.log(3333)
    }
   
  },
  components: {
    Header,
    List,
    CarCon,
    Footer,
    HeadScoll,
    rightBox
  }
};
</script>
<style lang="css" scoped>
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
.buy {
  width: 100%;
}
.header {
  width: 100%;
  height: 50px;
}
.head >>> a {
  color: black;
}
.head >>> a:hover {
  color: #22ac38;
  font-weight: normal;
}
.head >>> .phone {
  color: black;
  border-right: 1px solid black;
}
.head >>> .city {
  color: black;
}
.head >>> .city:hover {
  color: #22ac38;
  font-weight: normal;
}
.head>>>.buy{
  border-bottom: 2px solid #22ac38;
}
.top-banner-app {
  background: url(//cli-sta.guazistatic.com/c2c_web/listhengfu.a9a66368b8d6341993954ec8c4f76628.png)
    no-repeat;
  background-size: 100%;
  background-position: 50%;
  width: 1200px;
  height: 120px;
  margin: 0 auto;
}
</style>