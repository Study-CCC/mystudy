<template>
  <div>
    <Header class="head"></Header>
    <total-header />
    <display-car />
    <bottom-content />
    <mid-nav v-show="isShow" />
    <Footer></Footer>
    <rightBox :flagTop="flag" @scollTop="scollTop" :sellShow="sellShow"></rightBox>
  </div>
</template>

<script>
import Header from "@/components/common_components/header";
import TotalHeader from "@/components/sell_components/TotalHeader";
import DisplayCar from "@/components/sell_components/DisplayCar";
import BottomContent from "@/components/sell_components/BottomContent";
import MidNav from "@/components/sell_components/MidNav";
import Footer from "@/components/common_components/footer/footer";
import rightBox from "@/components/common_components/rightBox";
export default {
  data() {
    return {
      isShow: false,
      flag:false,
      sellShow:true
    };
  },
  components: {
    Header,
    TotalHeader,
    DisplayCar,
    BottomContent,
    MidNav,
    Footer,
    rightBox
  },
  mounted() {
    document.addEventListener(
      "mousewheel",
      event => {
        if (document.documentElement.scrollTop >= 400) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      false
    );
    document.addEventListener(
      "scroll",
      event => {
        if (document.documentElement.scrollTop >= 400) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      false
    );
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

</style>
