// pages/swiper-picture/swiper-picture.js
var swiperDatabase = require('../../data/swiper.js');
var productDatabase = require('../../data/product.js');
var scrollData = require('../../data/information.js');
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
    this.setData({
      swiperDatabase: swiperDatabase.Swiper_database,
      productDatabase: productDatabase.Product_database,
      classData: scrollData.Class_database
    })
    console.log(this.data.swiperdatabase)
  },
  chooseTap: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log(res.latitude);
        console.log(res.longitude);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goToDe: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})