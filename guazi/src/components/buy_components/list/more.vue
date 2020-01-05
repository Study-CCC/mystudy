<template>
  <div class="more">
    <p class="tit">更多</p>
    <ul class="dd-more">
      <li class="sel" v-for="(value,index) in more" :key="index">
        <p class="dd-sel">
          {{value.title}}
          <i></i>
        </p>
        <div class="dd-option">
          <a v-for="(a,b) in value.carOption" :key="b">{{a}}</a>
        </div>
      </li>
    </ul>
    <div id="allItem1" class="all" @click="show">
      <span id="itemText1">全部</span>
      <i class="icon1"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more: {},
      flagCon: false
    };
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:8080/static/wantbuy.json").then(res => {
        this.more = res.data.more;
        // console.log(this.more.length);
        for (let i = 0; i < this.more.length; i++) {
          this.more[i].carOption = this.changeType(this.more[i].carOption);
        }
      }).then(()=>{
      var allOpt = document.getElementsByClassName("sel");
        for (let i = allOpt.length - 1; i > allOpt.length - 5; i--) {
          allOpt[i].style.display = "none";
        }
      });
    },
    show() {
      var all = document.getElementById("allItem1");
      var allOpt = document.getElementsByClassName("sel");
      var tit = document.getElementsByClassName("tit")[0]
      if (all.innerText.includes("全部")) {
        document.getElementById("itemText1").innerText = "收起";
        document.getElementsByClassName("icon1")[0].style.backgroundPosition =
          "-40px -10px";
        for (let i = allOpt.length - 1; i > allOpt.length - 5; i--) {
          allOpt[i].style.display = "block";
        }
        tit.style.height=92+'px'
      } else {
        document.getElementById("itemText1").innerText = "全部";
        document.getElementsByClassName("icon1")[0].style.backgroundPosition =
          "-40px 0px";
        for (let i = allOpt.length - 1; i > allOpt.length - 5; i--) {
          allOpt[i].style.display = "none";
          
        }tit.style.height=50+'px'
      }
    }
  },
  created(){

  },
  mounted() {
    this.getData();

  }
};
</script>
<style lang='' scoped>
.more {
  width: 1196px;
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
li {
  list-style: none;
}
.dd-more {
  float: left;
  width: 1050px;
  padding: 6px 0 6px 14px;
}
.sel {
  float: left;
  margin: 6px 12px 5px 0;
  height: 26px;
  line-height: 26px;
  padding: 0 5px;
  font-size: 14px;
  color: #495056;
  width: 88px;
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
.sel:hover .dd-option {
  display: block;
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
  display: none;
  position: relative;
  top: 0px;
  left: -6px;
  z-index: 21;
  width: 98px;
  height: auto;
  padding: 5px 0;
  background: #fff;
  border: 1px solid #22ac38;
  overflow: hidden;
}
.dd-option a {
  padding: 0 0 0 5px;
  height: 26px;
  line-height: 26px;
  color: #495056;
  font-size: 14px;
  display: block;
  text-decoration: none;
}
.dd-option a:hover {
  background-color: #22ac38;
}
.all {
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 6px;
  color: #495056;
  margin: 0 8px;
}
.all {
  cursor: pointer;
  margin: 0 auto;
  padding: 15px 0 15px 6px;
}
.icon1 {
  display: inline-block;
  width: 11px;
  height: 6px;
  margin-left: 4px;
  font-size: 0;
  line-height: 0;
  background-position: -40px 0;
  vertical-align: 2px;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon.cccdd6106c22fa2cc2fbd5f5c65a1f27.png);
  background-repeat: no-repeat;
}
</style>