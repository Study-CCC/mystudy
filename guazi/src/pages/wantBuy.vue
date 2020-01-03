<template>
  <div>
    <Header class="head"></Header>
      <!-- <List></List> -->
  </div>
</template>

<script>
import Header from "@/components/common_components/header";
import List from '@/components/buy_components/list/list'
  export default {
    data () {
      return {

      };
    },
    components:{
        Header,
        List
    }
  }

</script>
<style lang="css" scoped>
.head >>> a{
    color: black;
}
.head >>> a:hover{
    color: #22ac38;
    font-weight: normal;
}
.head>>>.phone{
  color: black;
  border-right: 1px solid black;
}
.head >>> .city{
    color: black;
}
.head>>>.city:hover{
    color: #22ac38;
  font-weight: normal;
}

</style>