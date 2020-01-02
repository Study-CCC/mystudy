<template>
  <div>
    <ul class="slide-item">
      <li>
        <a><img src="" alt="">
        <span></span>
        <i class="arrow"></i>
        </a>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        title:'',
        text:'',
        img:''
      };
    },
  }

</script>
<style lang='' scoped>
.slide-item{
  display: flex;
}
.arrow{
  display: block;
  background: url(//cli-sta.guazistatic.com/c2c_web/next2.3d5a92aa1fec4ed61930edca0ea95564.png);
  background-size: 100% 100%;
  height: 10px;
  width: 13px;
}
</style>