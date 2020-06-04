<template>
  <div id="app">
    {{$store.getters.totalCount}}
    <button>学生</button>
    <span>{{$store.state.stu}}</span>
    <button @click="filterData">过滤</button>
    <span>{{$store.getters.getAge(15)}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    filterData(){
      console.log(this.$store)
    }
  },
}
</script>

<style>
</style>
