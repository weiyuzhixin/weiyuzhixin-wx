// pages/order/order.js
var statusDatabase = ('../../data/status.js');
Page({
  data: {
    active: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      statusDatabase: statusDatabase.Status_database
    })
  },
  // onChange(event) {
  //   wx.showToast({
  //     title: `切换到标签 ${event.detail.name}`,
  //     icon: 'none'
  //   });
  // }
});