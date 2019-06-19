<template>
    <div>
        <img class="logo" src="../assets/logo.png" alt="">
        <ul class="miniItem">
            <li v-for="(item,index) in mineArr" :key="index" @click="itemClick(item)">
                <span class="texts">{{item.lable}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      mineArr: [
        { lable: "商品收藏" },
        { lable: "我的足迹" },
        { lable: "我的订单" },
        { lable: "优惠活动" },
        { lable: "退出", type: "exit" }
      ]
    };
  },
  methods: {
    itemClick: function(item) {
      if (item.type == "exit") {
        this.$store.commit("setToken", "");
        localStorage.removeItem("token");
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>
<style>
.miniItem li {
  font-size: 14px;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  border-bottom: 1px solid #dedede;
  display: flex;
}
.texts {
  width: 90%;
  display: block;
}
</style>