<template>
  <div>
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index">
        <a href="#">
          <img class="banner" :alt="item.name" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <cube-slide ref="slide" :data="lists" @change="changePage" :auto-play='false'>
      <cube-slide-item v-for="(item, index) in lists" :key="index">
        <ul class="listUl">
          <li v-for="(item1,index1) in item" :key="index1">
            <a :href="item1.url">
              <img :src="item1.image" alt="">
              <p>{{item1.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      lists: []
    };
  },
  methods: {
    changePage(current) {
      //   console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  async created() {
    try {
      const items = await this.$http.get("/api/getBanner");
      console.log(items);
      this.items = items.data.data;
      const lists = await this.$http.get("/api/lists");
      this.lists = lists.data.data;
      const names = await this.$http.get("/api/getGoodsClassify");
      console.log(names);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style>
.banner {
  display: block;
  width: 100%;
  height: 150px !important;
}
.listUl {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.listUl li {
  width: 20%;
  justify-content: center;
}
.listUl li img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 5px 0;
}
.listUl li p {
  font-size: 14px;
  padding-bottom: 10px;
}
</style>