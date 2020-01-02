<template>
  <div>
      <List></List>
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
.head >>> .header_list a{
    color: black;
}
.head >>> .city{
    color: black;
}
</style>