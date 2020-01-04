<template>
  <div class="more">
    <p class="tit">更多</p>
    <ul class="dd-more">
      <li class="sel">
        <p class="dd-sel">
          <i></i>
        </p>
        <div class="dd-option">
          <a href=""></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more:{}
    };
  },
  methods: {
    getData(){
      this.$http.get("http://localhost:8080/static/wantbuy.json").then(res => {
        this.more= res.data.more
        console.log(this.more.length);
        
      })
    }
  },
};
</script>
<style lang='' scoped>
.more {
  width: 1198px;
  min-height: 50px;
  border: 1px solid #e6e6e6;
  margin: 0 auto;
  display: flex;
}
.tit {
  width: 70px;
  height: 100%;
  line-height: 50px;
  font-size: 14px;
  color: #7a838d;
  text-align: center;
  background: #fafafa;
}
i {
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon.cccdd6106c22fa2cc2fbd5f5c65a1f27.png);
  background-repeat: no-repeat;
}
.dd-more {
  float: left;
  width: 1050px;
  padding: 6px 0 6px 14px;
}
.sel {
  float: left;
  margin: 5px 12px 5px 0;
  height: 26px;
  line-height: 26px;
  padding: 0 5px;
  font-size: 14px;
  color: #495056;
  width: 78px;
  background: #fff;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sel:hover {
  border: 1px solid #22ac38;
}
.sel:hover .dd-sel i {
  background-position: -40px -10px;
}
.dd-sel i {
  float: right;
  width: 11px;
  height: 6px;
  line-height: 0;
  font-size: 0;
  margin-top: 10px;
  background-position: -40px 0;
}
.dd-option {
  display: block;
  position: relative;
  top: 27px;
  left: -6px;
  z-index: 21;
  width: 88px;
  height: auto;
  padding: 5px 0;
  background: #fff;
  border: 1px solid #22ac38;
}
.dd-option a {
    padding: 0 0 0 5px;
    height: 26px;
    line-height: 26px;
    color: #495056;
    font-size: 14px;
}
</style>