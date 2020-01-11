<template>
  <div class="footer">
    <FooterHead></FooterHead>
    <FooterPart
      v-for="(item,index) in result"
      :key="index"
      :linktit="item.linktit"
      :linkcar="item.linkcar"
    ></FooterPart>
    <p style="text-align:center;line-height:20px;font-size:12px;color:#666; padding-top:20px;">
      车好多旧机动车经纪（北京）有限公司
      北京市顺义区南法信镇政府西侧(北京市旧机动车交易市场有限公司顺义分市场院内A区01号)
      010-57317000
    </p>
  </div>
</template>

<script>
import FooterPart from "./footerpart";
import FooterHead from "./footerHead";
export default {
  name: "",
  props: [""],
  components: {
    FooterPart,
    FooterHead
  },
  data() {
    return {
      result: [],
      linktit: [],
      linkcar: []
    };
  },
  created() {
    // 通过axios获取footer中的数据
    this.$http.get("http://localhost:8080/static/footer.json").then(res => {
      res.data.data.map((item, index) => {
        // this.linktit.push(item.linktit);
        // this.linkcar.push(item.linkcar);
        this.result.push({ linktit: item.linktit, linkcar: item.linkcar });
      });
    });
  }
};
</script>
<style scoped>
.footer {
  padding: 50px 0 30px;
  background: #2a2c37;
}
</style>