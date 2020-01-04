<template>
  <div class="buy">
    <Header class="head"></Header>
    <div class="header"></div>
    <div class="top-banner-app"></div>
    <List></List>

  </div>
</template>

<script>
import Header from "@/components/common_components/header";
import List from "@/components/buy_components/list/list";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    List
  }
};
</script>
<style lang="css" scoped>
li,
ol,
ul {
  list-style: none;
}
.w1200 {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.buy {
  width: 100%;
}
.header {
  width: 100%;
  height: 50px;
}
.head >>> a {
  color: black;
}
.head >>> a:hover {
  color: #22ac38;
  font-weight: normal;
}
.head >>> .phone {
  color: black;
  border-right: 1px solid black;
}
.head >>> .city {
  color: black;
}
.head >>> .city:hover {
  color: #22ac38;
  font-weight: normal;
}
.top-banner-app {
  background: url(//cli-sta.guazistatic.com/c2c_web/listhengfu.a9a66368b8d6341993954ec8c4f76628.png)
    no-repeat;
  background-size: 100%;
  background-position: 50%;
  width: 1200px;
  height: 120px;
  margin: 0 auto;
}

</style>