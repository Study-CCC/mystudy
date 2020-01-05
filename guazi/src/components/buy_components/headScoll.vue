<template>
  <div class="headScoll">
    <ul class="fix-con">
      <li class="con-tit">品牌：</li>
      <li class="con-sel">
        <p class="dd-sel1">
          <i></i>
          不限
        </p>
      </li>
      <li class="con-tit">车系：</li>
      <li class="con-sel">
        <p class="dd-sel1">
          <i></i>
          不限
        </p>
      </li>
      <li class="con-tit">价格：</li>
      <li class="con-sel">
        <p class="dd-sel1">
          <i></i>
          不限
        </p>
      </li>
      <li class="con-tit">热门：</li>
      <li class="con-sel">
        <p class="dd-sel1">
          <i></i>
          不限
        </p>
      </li>
      <li>
        <span class="dd-btn">
          更多
          <i></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style lang='' scoped>
.headScoll {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e6e6e6;
  background: #f8f8f8;
}
li {
  list-style: none;
}
.fix-con {
  display: flex;
  width: 1200px;
  height: 28px;
  padding: 10px 0;
  margin: 0 auto;
}
.con-tit {
  width: 50px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  color: #7a838d;
  margin-left: 10px;
}
.dd-sel1 {
  height: 26px;
  line-height: 26px;
  padding: 0 5px;
  font-size: 14px;
  color: #495056;
  width: 78px;
  background: #fff;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dd-sel1 i{
    background-image: url(//cli-sta.guazistatic.com/c2c_web/icon.cccdd6106c22fa2cc2fbd5f5c65a1f27.png);
    background-repeat: no-repeat;
    float: right;
    width: 11px;
    height: 6px;
    line-height: 0;
    font-size: 0;
    margin-top: 10px;
    background-position: -40px 0;
}
.dd-btn i{
     background-image: url(//cli-sta.guazistatic.com/c2c_web/icon.cccdd6106c22fa2cc2fbd5f5c65a1f27.png);
    background-repeat: no-repeat;
    float: right;
    width: 11px;
    height: 6px;
    line-height: 0;
    font-size: 0;
    margin-top: 8px;
    background-position: -40px 0;
    margin-left: 3px;
}
.dd-btn{
    float: right;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding: 0 7px;
    color: #495056;
    cursor: pointer;
    margin-top: 4px;
    margin-left: 10px;
}
.dd-more {
  float: left;
  width: 1050px;
  padding: 6px 0 6px 14px;
}
</style>