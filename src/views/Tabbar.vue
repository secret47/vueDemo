<template>
  <div>
    <router-view></router-view>
    <cube-tab-bar class="tabbar" v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler">
    </cube-tab-bar>
  </div>

</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: "Vip",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-like"
        },
        {
          label: "购物车",
          icon: "cubeic-vip"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case "首页":
          this.$router.push("/tabbar/index");
          break;
        case "分类":
          this.$router.push("/tabbar/catalog");
          break;
        case "购物车":
          this.$router.push("/tabbar/cart");
          break;
        case "我的":
          this.$router.push("/tabbar/mine");
          break;
      }
    }
  }
};
</script>
<style>
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  background: #ffffff;
}
.tabbar .cube-tab div {
  font-size: 14px;
}
</style>