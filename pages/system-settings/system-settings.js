// pages/system-settings/system-settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
 
  goReset: function(){
    wx.navigateTo({
      url: '../reset/reset',
    })
  }
 


})