// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const productsColletion = db.collection('products');
const _ = db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [],
    page: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    productsColletion
      .get()
      .then(res => {
        this,setDta({
          products: res.data
        })
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    productsColletion
      .get()
      .then(res => {
        this, setDta({
          products: res.data
        })
      },res =>{
        console.log('更新完成');
        wx.stopPullDownRefresh();
      });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = this.data.page + 20;
    productsColletion
      .skip(page)
      .get()
      .then(res =>{
        let new_data = res.data;
        let old_data = this.data.products;
        this.setDta({
          products: old_data.concat(new_data),
          page: page
        })
      }, res2 => {
        console.log(`第${page}页数据加载`);
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})