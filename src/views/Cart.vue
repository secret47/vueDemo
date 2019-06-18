<template>
    <div>
        <div class="goods" v-for='(item,index) in cartArr' :key='index'>
            {{item.title}}
            <div class="goodsRight">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button>下单</cube-button>
        <cube-button @click="emptyCart">清空购物车</cube-button>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //   cartArr: []
    };
  },
  //计算属性
  computed: {
    ...mapState({
      cartArr: state => state.cartArr
    })
  },
  methods: {
    //减少商品
    removeCart: function(index) {
      this.$store.commit("removeGoods", index);
    },
    //增加
    addCart: function(index) {
      this.$store.commit("addGoods", index);
    },
    //清空购物车
    emptyCart: function() {
      this.$store.commit("clearCarts");
    }
  }
};
</script>
<style>
</style>