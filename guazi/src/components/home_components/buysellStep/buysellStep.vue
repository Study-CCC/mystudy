<template>
  <div class="index-buysell-step">
      <div class="step-tab">
        <span class="active js-buyProcedure" ref="buy_car">买车流程</span>
        <em>|</em>
        <span class="js-sellProcedure" ref="sale_car">卖车流程</span>
    </div>
    <div class="slide-mask"></div>
    <div class="slide-area"></div>
  </div>
</template>

<script>
import stepSlide from './stepSlide'
export default {
  data() {
    return {};
  }
};
</script>
<style lang='' scoped>
.index-buysell-step {
    position: relative;
    font-size: 14px;
    z-index: 1;
    height: 431.5px;
}
.step-tab {
    position: absolute;
    top: 67px;
    left: 50%;
    z-index: 11;
    width: 186px;
    margin-left: -546px;
}
.step-tab .active {
    border-bottom: 3px solid #22ac38;
}
.step-tab span {
    display: inline-block;
    width: 66px;
    font-size: 16px;
    color: #181818;
    padding-bottom: 6px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
}
.step-tab em {
    padding: 0 20px;
    color: #d2d2d2;
    font-style: normal;
}
.slide-mask {
    top: 0;
    left: -78px;
    z-index: 10;
    background: url(//cli-sta.guazistatic.com/c2c_web/mask.3642195d3f6eed370c899cc57e6f772e.png) no-repeat top;
}
.slide-area, .slide-mask {
    position: absolute;
    width: 100%;
    height: 431.5px;
}
</style>