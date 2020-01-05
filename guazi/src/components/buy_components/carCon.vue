<template>
  <div class="carCon clearfix">
    <p class="search">在 "南昌二手车" 中为您找到88217辆好车</p>
    <div class="list clearfix">
      <div class="list-tab">
        <a class="tab-item active">全部</a>
        <em></em>
        <a class="tab-item">付三成</a>
        <em></em>
        <a class="tab-item">严选车</a>
        <i></i>
      </div>
      <div class="list-sort">
        <a @click="defaultSort" class="hot-sort activeSort">默认排序</a>
        <a @click="newSort" class="hot-sort">最新发布</a>
        <a @click="priceSort" class="hot-sort">
          价格
          <i class="sortIcon"></i>
        </a>
        <a @click="yearSort" class="hot-sort">
          车龄
          <i class="sortIcon"></i>
        </a>
        <a @click="distanceSort" class="hot-sort">
          里程
          <i class="sortIcon"></i>
        </a>
        <div class="hot-screen hot-sort">
          <p>
            <i></i>热门筛选
          </p>
        </div>
      </div>
    </div>
    <div class="carContent clearfix">
      <ul>
        <li v-for="(value,index) in buyCarItem" :key="index">
          <carItem :item="value" v-if="buyCarItem.length"></carItem>
        </li>
      </ul>
    </div>
    <div class="pageBox">
      <ul>
        <li class="pageNum one">1</li>
        <li class="pageNum">2</li>
        <li class="pageNum">3</li>
        <li class="pageNum">4</li>
        <li class="pageNum">5</li>
        <li class="pageNum">6</li>
        <li class="pageNum">7</li>
        <li class="pageNum one">...</li>
        <li class="pageNum">50</li>
        <li class="pageNum final">
          下一页
          <p class="arrow">&gt;</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import carItem from "@/components/common_components/carItem";
export default {
  data() {
    return {
      oldCarItem: {},
      buyCarItem: {},
      pSort: false,
      ySort: false,
      dSort: false,
      nSort: false
    };
  },
  props: ["firstNum", "secondNum"],
  created() {
    this.getData();
  },
  mounted() {},

  methods: {
    defaultSort() {
      this.carSort(null,"默认排序")
      this.buyCarItem = JSON.parse(JSON.stringify(this.oldCarItem));
    },
    newSort() {
      this.carSort(null,"最新发布")

      if (this.ySort)
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(a.carType.split("|")[0]) -
            parseFloat(b.carType.split("|")[0])
          );
        });
      else
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(b.carType.split("|")[0]) -
            parseFloat(a.carType.split("|")[0])
          );
        });
    },
    priceSort() {
      this.carSort("pSort","价格");
       if (this.pSort)
        this.buyCarItem.sort((a, b) => {
          return parseFloat(a.carPrice) - parseFloat(b.carPrice);
        });
      else
        this.buyCarItem.sort((a, b) => {
          return parseFloat(b.carPrice) - parseFloat(a.carPrice);
        });
    },
    yearSort() {
      this.carSort("ySort","车龄");
      if (this.ySort)
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(a.carType.split("|")[0]) -
            parseFloat(b.carType.split("|")[0])
          );
        });
      else
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(b.carType.split("|")[0]) -
            parseFloat(a.carType.split("|")[0])
          );
        });
    },
    distanceSort() {
            this.carSort("dSort","里程");

      if (this.dSort)
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(a.carType.split("|")[1]) -
            parseFloat(b.carType.split("|")[1])
          );
        });
      else
        this.buyCarItem.sort((a, b) => {
          return (
            parseFloat(b.carType.split("|")[1]) -
            parseFloat(a.carType.split("|")[1])
          );
        });
    },
    // 进行分类的封装函数
    carSort(sortType,name) {
      var allSort = document
        .getElementsByClassName("list-sort")[0]
        .getElementsByTagName("a");
      for (let i = 0; i < allSort.length; i++) {
        if (allSort[i].innerText.includes(name)) {
          allSort[i].classList.add("activeSort");
          if (allSort[i].getElementsByTagName("i")[0]) {
            if (!this[sortType])
              allSort[i].getElementsByTagName("i")[0].style.backgroundPosition =
                "-65px -120px";
            else
              allSort[i].getElementsByTagName("i")[0].style.backgroundPosition =
                "-65px -130px";
          }
        } else {
          allSort[i].classList.remove("activeSort");
          if (allSort[i].getElementsByTagName("i")[0])
            allSort[i].getElementsByTagName("i")[0].style.backgroundPosition =
              "-65px -110px";
        }
      }
      var fl = !this[sortType];
      this.pSort = false;
      this.ySort = false;
      this.dSort = false;
      this[sortType] = fl;
    },

    getData() {
      this.$http.get("http://localhost:8080/static/wantbuy.json").then(res => {
        this.oldCarItem = JSON.parse(JSON.stringify(res.data.carItem));
        if (this.firstNum == this.secondNum) this.buyCarItem = res.data.carItem;
        else
          for (let i = 0; i < res.data.carItem.length; i++) {
            if (
              parseFloat(res.data.carItem[i].carPrice) >= this.firstNum &&
              this.secondNum >= parseFloat(res.data.carItem[i].carPrice)
            ) {
              this.buyCarItem.push(res.data.carItem[i]);
            }
          }
        // else{
        //   this.buyCarItem
        // }

        // console.log(this.buyCarItem);
      });
    }
  },
  components: {
    carItem
  }
};
</script>
<style lang='' scoped>
.carCon {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: #22ac38;
}
.search {
  color: #a5abb2;
  padding: 0 3px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
em {
  float: left;
  width: 10px;
  height: 16px;
  border-left: 1px solid #e6e6e6;
  margin-left: 10px;
  margin-top: 18px;
  font-style: normal;
}
li {
  list-style: none;
}
.list-tab i {
  background-image: url("../../assets/img/icon-jian.png");
  background-size: 23px 18px;
  background-repeat: no-repeat;
  position: relative;
  top: 17px;
  left: 270px;
  display: block;
  width: 23px;
  height: 18px;
}
.carContent ul {
  width: 1228px;
  margin-left: -10px;
  margin-bottom: 20px;
}
.arrow {
  font-family: simsun;
  font-size: 15px;
  font-weight: 700;
  display: inline;
}
.pageBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.pageBox li:hover {
  background: #22ac38;
  cursor: pointer;
}
.pageBox .one:hover {
  background: #fff;
}
.pageBox ul {
  display: flex;
  margin: 0 auto;
  clear: both;
  text-align: center;
}
.pageNum {
  background: #fafafa;
  border: 1px solid #e6e6e6;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  color: #495056;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  font-weight: 400;
  margin: 0 0 0 5px;
}
.one {
  border: 1px solid #fff;
  background: #fff;
  color: #22ac38;
}
.final {
  width: 83px;
}
.active {
  border-bottom: 3px solid #22ac38;
}
.list-tab a {
  float: left;
  height: 46px;
  line-height: 46px;
  padding: 3px 10px 0;
  font-size: 22px;
  color: #495056;
}
.list {
  height: 57px;
  padding-top: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
}
.list-tab {
  float: left;
}
.list-sort {
  float: right;
}
.hot-screen p {
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  font-size: 14px;
  color: #495056;
  width: 72px;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-screen i {
  float: right;
  width: 9px;
  height: 9px;
  line-height: 0;
  font-size: 0;
  margin-top: 8px;
  background-position: -55px 0;
  border-image: url("../../assets/img/wantBuy.png");
  background-repeat: no-repeat;
}
.hot-screen {
  position: relative;
  top: -5px;
}
.hot-sort {
  border-left: 1px solid #e6e6e6;
  float: left;
  width: 72px;
  height: 18px;
  margin-top: 5px;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  color: #495056;
}
.hot-sort:first-child {
  border: none;
}
.sortIcon {
  display: inline-block;
  background-image: url("../../assets/img/wantBuy.png");
  background-repeat: no-repeat;
  width: 7px;
  height: 9px;
  margin-left: 5px;
  background-position: -65px -110px;
}
.activeSort {
  color: #22ac38;
}
</style>