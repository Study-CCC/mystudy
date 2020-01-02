<template>
  <div class="slideCar">
    <!-- title图片 -->
    <ul class="carGroup">
      <!-- item图片 -->
      <li
        class="group"
        v-for="(item,index) in group"
        :key="index"
        @mouseenter="styleAdd($event.target,index)"
      >
        <img :src="item.img" />
        <span class="icon"></span>
      </li>
    </ul>
    <div class="carList">
      <div class="left-icon" v-on:click="slideLeft">
        <i ref="left"></i>
      </div>
      <ul>
        <li v-for="(item,index) in item" :key="index">
          <a href="#">
            <img :src="item.caritemImg" alt />
            <span class="carName">{{item.caritemName}}</span>
            <span class="price">{{item.caritemPrice}}</span>
          </a>
        </li>
      </ul>
      <div class="right-icon" v-on:click="slideRight">
        <i ref="right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
      times: 0,
      distance: 0,
      change: "title1",
      oldindex: 0,
      group: []
    };
  },
  methods: {
    getData(groupName = this.change) {
      this.$http.get("http://localhost:8080/static/carBox.json").then(res => {
        this.item = res.data.data[groupName];
        this.group = res.data.data.group;
        // console.log(res.data.data[group])
      });
    },
    slideLeft() {
      this.distance = this.distance + 196;
      const left = this.$refs.left;
      // console.log(left)
      if (this.distance > 0) {
        this.distance = 0;
        left.classList.remove("left-active");
      } else {
        var li = document.querySelector(".carList").getElementsByTagName("li");
        // console.log(leftIcon.classList)
        for (let i = 0; i < li.length; i++) {
          li[i].style.transform = `translateX(${this.distance}px)`;
        }
      }
    },
    slideRight() {
      var li = document.querySelector(".carList").getElementsByTagName("li");
      var icon = document.getElementsByClassName("right-icon");
      const len = this.item.length;
      this.distance = this.distance - 196;
      // console.log(len)
      if ((len - 6) * 196 + this.distance >= 0) {
        console.log(11);
        this.$refs.left.classList.add("left-active");
        this.$refs.right.classList.add("right-active");
        for (let i = 0; i < li.length; i++) {
          li[i].style.transform = `translateX(${this.distance}px)`;
        }
      } else {
        this.$refs.right.classList.remove("right-active");
        this.distance = -(len - 6) * 196;
      }
    },
    styleAdd(a = document.querySelectorAll(".group"), b = 0) {
      // console.log(a.childNodes[0])
      this.getData(`title${b + 1}`);
      this.change = `title${b + 1}`;
      // 给标题图片添加三角形
      a.childNodes[2].style.backgroundImage = `url(${this.group[b].icon})`;
      // 给hover的图片添加url
      if (this.oldindex == b) {
        a.childNodes[0].src = `${this.group[b].hoverImg}`;
        a.childNodes[2].style.display = "none";
      } else {
        document.querySelectorAll(".group")[
          this.oldindex
        ].childNodes[0].src = `${this.group[this.oldindex].img}`;
        document.querySelectorAll(".group")[
          this.oldindex
        ].childNodes[2].style.display = "none";
        a.childNodes[0].src = `${this.group[b].hoverImg}`;
        a.childNodes[2].style.display = `block`;
        // console.log(a.childNodes[2].style)
        // console.log(document.getElementsByClassName('price'))
        for (
          let i = 0;
          i < document.getElementsByClassName("price").length;
          i++
        ) {
          document
            .getElementsByClassName("price")
            [i].classList.add(`style${b + 1}`);
        }
        // a.getElementsByTagName("span")[0].classList.add(`style${b}`)
      }
      this.oldindex = b;
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    // this.styleAdd()
  }
};
</script>
<style lang='' scoped>
.slideCar {
  position: relative;
  top: -50px;
  width: 1200px;
  margin: 0px auto;
}
.carGroup {
  display: flex;
}
.carGroup li {
  width: 300px;
  height: 225px;
}
.carList {
  height: 240px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carList ul {
  width: 1138px;
  overflow: hidden;
  display: flex;
}
.carList ul li {
  margin-right: 36px;
}
.carList li img {
  height: 70px;
  width: 160px;
}
.group img {
  width: 100%;
}
.group {
  position: relative;
}
.icon {
  display: none;
  width: 20.5px;
  height: 10.5px;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  bottom: -10.5px;
  margin-left: -10px;
}

.left-icon,
.right-icon {
  width: 31px;
  float: left;
  transform: translateY(-50%);
}
.right-icon {
  float: right;
}
.left-icon i {
  height: 28px;
  display: block;
  background: url("../../assets/img/left-icon.png") no-repeat;
  background-size: 100% 100%;
}
.left-active:hover {
  background: url("../../assets/img/left-iconHover.png") no-repeat;
  background-size: 100% 100%;
}
.right-icon i {
  height: 28px;
  display: block;
  background: url("../../assets/img/right-icon.png") no-repeat;
  background-size: 100% 100%;
}
.right-active:hover {
  background: url("../../assets/img/right-iconHover.png") no-repeat;
  background-size: 100% 100%;
}
.carName {
  display: block;
  width: 100%;
  font-size: 14px;
  color: #181818;
  margin-top: 18px;
  line-height: 14px;
  text-align: center;
}
.price {
  font-size: 14px;
  color: #3cb46d;
  line-height: 14px;
  margin-top: 10px;
  text-align: center;
    display: block;
}
.style1 {
  color: #3cb46d;
}
.style2 {
  color: #ffa000;
}
.style3 {
  color: #ff3f00;
}
.style4 {
  color: #25b29d;
}
</style>