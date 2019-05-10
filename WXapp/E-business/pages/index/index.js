const WXAPI = require('../../wxapi/main');

Page ({
  data: {
    goods: [], // 商品列表
    categories: [], //分类
    activeCategoryId: 0 // 当前分类
  },
  onLoad() {
    this.getNotice(); //通告
    this.getBanners(); // 请求Banner位
    this.loadGoods(); // 商品
  },
  getNotice() {
    WXAPI.noticeList({
      
    })
  },
  getBanners() {
    WXAPI.banners({
      type: 'new'
    })
    .then(res => {
      console.log(res)
    })
  },
  loadGoods() {
    WXAPI.goods({
      recommendStatus: 1
    })
    .then(res => {
      console.log(res);
    })
  }
})