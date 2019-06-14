var Mock = require('mockjs');

const Random = Mock.Random; //获取mock.Random对象

//随机来个上品分类

const goodsClassify = function (opt) {
    let goods = [];
    for (let i = 0; i < 10; i++) {
        let newGoodsObj = {
            id: i,
            title: Random.ctitle(5)
        }
        goods.push(newGoodsObj)
    }
    return {
        data: goods
    }
}

//生成图片
const getBanner = function (opt) {
    let banners = [];
    for (let i = 0; i < 3; i++) {
        let newBanner = {
            name: Random.ctitle(7),
            image: Random.dataImage('720x300')
        }
        banners.push(newBanner)
    }
    return {
        data: banners
    }
}




Mock.mock('/api/getGoodsClassify', goodsClassify);
Mock.mock('/api/getBanner', getBanner);