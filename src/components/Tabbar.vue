<template>
  <div>
    <cube-tab-bar class="tabbar" v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler">
    </cube-tab-bar>
    <span class="countSum">{{countSum}}</span>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
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
  computed:{
    ...mapGetters({
      countSum:'countSum'
    })
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
          this.$router.replace("/index");
          break;
        case "分类":
          this.$router.replace("/catalog");
          break;
        case "购物车":
          this.$router.replace("/cart");
          break;
        case "我的":
          this.$router.replace("/mine");
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
.countSum {
  display: block;
  position: fixed;
  bottom: 50px;
  right: 25%;
  z-index: 1001;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff0000;
  line-height: 20px;
  font-size: 13px;
  color: #ffffff;
}
</style>