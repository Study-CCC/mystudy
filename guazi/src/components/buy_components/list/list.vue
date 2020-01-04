<template>
  <div class="list">
    <listItem v-for="(value,index) in listItem" :key="index" :title="value.title" :carList="value.carList"></listItem>
    <More></More>
  </div>
</template>

<script>
import More from './more'
import listItem from "./listItem"
  export default {
    data () {
      return {
         listItem:{}
      };
    },
    created(){
      this.getData()
    },
    methods: {
       getData(){
            this.$http.get("http://localhost:8080/static/wantbuy.json").then(res => {
              this.listItem=res.data.carList
              // console.log(this.listItem);
              
          })}
    },
    components:{
      More,
      listItem
    }
  }

</script>
<style lang='' scoped>
.list{
  width: 1198px;
  
    margin: 0 auto;
}
</style>