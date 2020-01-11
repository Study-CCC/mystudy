<template>
  <div class="listItem">
    <p>{{this.title}}</p>
    <ul class="list">
      <span class="alllist">不限</span>
      <a href="#" v-for="(value,index) in list" :key="index">{{value}}</a>
    </ul>
    <div id="allItem" class="all" v-show="flag" @click="show">
      <span id="itemText">全部</span>
      <i class="icon"></i>
    </div>
    <div v-show="flagCon" class="carContent">
      <ul>
        <li v-for="(info,index) in carInfo" :key="index">
          <label>{{info.carInitial}}</label>
          <div class="carItems">
            <a href v-for="(a,b) in carInfo[index].carItem" :key="b">{{a}}</a>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="flagPrice">
      <input type="text" ref="firstText" size="4" maxlength="3" />
      <span>-</span>
      <input type="text" ref="secondText" size="4" maxlength="3" />
      <span>万</span>
      <input type="button" @click="search" class="btn" value="确定" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "品牌",
      list: "",
      flag: true,
      carInfo: [],
      flagCon: false,
      flagPrice: false
    };
  },
  created() {
    this.change();
    this.getDate();
  },
  methods: {
    change() {
      this.list = this.changeType(this.carList);
    },
    search() {
      var firstnum = this.$refs.firstText.value;
      var secondnum = this.$refs.secondText.value
      if(parseInt(firstnum)>parseInt(secondnum))
      this.$emit("search",firstnum,secondnum)
      else
      this.$emit("search",secondnum,firstnum)
      
    },
    getDate() {
      this.$http
        .get("http://localhost:8080/static/wantbuy.json")
        .then(res => {
          res.data.allBrand.forEach(a => {
            this.carInfo.push({
              carInitial: a.firstC,
              carItem: this.changeType(a.carName)
            });
          });
        })
        .then(() => {
          if (this.title == "品牌") {
            this.flag = true;
            this.flagPrice = false;
          } else if (this.title == "价格") {
            this.flagPrice = true;
            this.flag = false;
          } else {
            this.flagPrice = false;
            this.flag = false;
          }
        });
    },
    show() {
      var all = document.getElementById("allItem");
      if (all.innerText.includes("全部")) {
        document.getElementById("itemText").innerText = "收起";
        document.getElementsByClassName("icon")[0].style.backgroundPosition =
          "-40px -10px";
        this.flagCon = true;
      } else {
        document.getElementById("itemText").innerText = "全部";
        document.getElementsByClassName("icon")[0].style.backgroundPosition =
          "-40px 0px";
        this.flagCon = false;
      }
    }
  },
  props: ["title", "carList"]
};
</script>
<style lang='' scoped>
.listItem {
  display: flex;
  border: 1px solid #e6e6e6;
  border-bottom: none;
  align-items: center;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
}
.list {
  display: flex;
  height: 20px;
}
.btn {
  width: 54px;
  height: 22px;
  line-height: 18px;
  font-size: 12px;
  margin-top: -1px;
  margin-left: 5px;
  background: #f6fcf7;
  color: #22ac38;
  border: 1px solid #22ac38;
  cursor: pointer;
}
li {
  list-style: none;
}
p {
  width: 70px;
  height: 100%;
  line-height: 50px;
  font-size: 14px;
  color: #7a838d;
  text-align: center;
  background: #fafafa;
}

a,
.alllist,
.all {
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 6px;
  color: #495056;
  margin: 0 8px;
}
a:hover,
.all:hover {
  color: #22ac38;
}
.all {
  cursor: pointer;
  margin: 0 auto;
  padding: 15px 0 15px 6px;
}
.alllist {
  color: #fff;
  background: #22ac38;
}

.icon {
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

.carContent li {
  display: flex;
  margin-top: 10px;
  width: 380px;
  margin-left: 10px;
}
.carContent ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
}
.carContent label {
  color: #22ab38;
  line-height: 24px;
}
.carContent li a {
  margin-left: 10px;
  white-space: nowrap;
  color: #495056;
  line-height: 24px;
}
span {
  color: #495056;
  line-height: 24px;
}
</style>