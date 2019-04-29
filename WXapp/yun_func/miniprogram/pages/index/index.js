Page({
  http: function() {
    // 手机端本地
    // 从本地到云端
    // 选择上传百度云
    wx.cloud.callFunction({
      name: 'http'
    }) 
    .then(res => {
      console.log(res);
    })
  }
})