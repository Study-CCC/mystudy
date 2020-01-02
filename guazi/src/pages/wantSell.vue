<template>
  <div>
    <Header></Header>
    <total-header/>
    <display-car/>
    <bottom-content/>
    <mid-nav v-show='isShow'/>
        <Footer></Footer></div>
</template>

<script>
import Header from "@/components/common_components/header";
import TotalHeader from '@/components/sell_components/TotalHeader'
import DisplayCar from '@/components/sell_components/DisplayCar'
import BottomContent from '@/components/sell_components/BottomContent'
import MidNav from '@/components/sell_components/MidNav'
import Footer from "@/components/common_components/footer/footer";
export default {
  data(){
    return {
      isShow:false
    }
  },
  components: {
  Header,
    TotalHeader,
    DisplayCar,
    BottomContent,
    MidNav,Footer
  },
  mounted(){
    document.addEventListener('mousewheel', event => {
      if(document.documentElement.scrollTop >= 400){
        this.isShow = true
      }else{
        this.isShow = false
      }
      
    },false)
    document.addEventListener('scroll', event => {
      if(document.documentElement.scrollTop >= 400){
        this.isShow = true
      }else{
        this.isShow = false
      }
      
    },false)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}

</style>
