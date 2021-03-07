<template>
    <div>
      <h1>my is hooks</h1>
      <p>1.{{state}}</p>
      <a>a</a>
    </div>
</template>

<script>
import {ref} from "vue";
export default {
  name:'hooks',
    setup(){
      const state = ref(1);
      return {state};
    }
    
}
</script>

<style scoped>

</style>