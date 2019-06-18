<template>
  <div class="panelBox">
    <cube-scroll class="leftPanel">
      <ul>
        <li v-for="(item,index) in leftPanelsData " @click="getRight(index)" :key="index" :class="item.active ?'active':'default'">
          {{item.label}}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightPanel">
      <ul>
        <li v-for="(item,index) in rightPanelsData " class="items" :key="index">
          <a href="">
            <img :src="item.imgUrl" alt="">
            <label>{{item.name}}
              <i class="cubeic-add" @click="addCart($event,item)"></i>
            </label>
          </a>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftPanelsData: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "医药健康",
          active: false
        },
        {
          label: "家装家居",
          active: false
        },
        {
          label: "美妆洗护",
          active: false
        },
        {
          label: "户外运动",
          active: false
        },
        {
          label: "美食生鲜",
          active: false
        },
        {
          label: "装修建材",
          active: false
        },
        {
          label: "学习服务",
          active: false
        },
        {
          label: "箱包配件",
          active: false
        },
        {
          label: "珠宝首饰",
          active: false
        }
      ],
      rightPanelsData: [
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        },
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        },
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        },
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        },
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        },
        {
          imgUrl:
            "//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2616970884/O1CN01VcFUkS1IOuevlghuf_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "iphone xs"
        },
        {
          imgUrl:
            "//g-search3.alicdn.com/img/bao/uploaded/i4/i3/1714128138/O1CN013dLgEv29zFihcLdgL_!!0-item_pic.jpg_180x180.jpg_.webp",
          name: "小米9"
        },
        {
          imgUrl:
            "https://img.alicdn.com/imgextra/i2/2616970884/O1CN01SduKcT1IOucLblFLW_!!2-item_pic.png_430x430q90.jpg",
          name: "华为mate20"
        }
      ]
    };
  },
  methods: {
    async getRight(index) {},
    async getCatalog(index) {},
    //增加上品
    addCart: function(e, item) {
      e.preventDefault();

      console.log(e);
      this.$store.commit("addCart", item);
    }
  },
  created() {
    //获取初始化的分类
    this.getCatalog("0");
  },
  mounted() {
    var panBoxHeight = document.querySelector(".panelBox");
    panBoxHeight.style.height =
      document.documentElement.clientHeight - 60 + "px";
    console.log(document.documentElement.clientHeight - 60);
  }
};
</script>
<style>
.panelBox {
  display: flex;
}
.leftPanel {
  width: 30%;
}
.leftPanel li {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #fff;
  font-size: 14px;
}
.default {
  color: #333;
  background: #f8f8f8;
}

.active {
  background: #fff;
  color: #e93b3d;
}
.rightPanel {
  width: 70%;
}
.rightPanel ul {
  display: flex;
  flex-wrap: wrap;
}
.rightPanel ul li {
  width: 50%;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.rightPanel img {
  width: 80px;
  height: 80px;
}
.items label {
  display: block;
  height: 50px;
  line-height: 50px;
}
</style>