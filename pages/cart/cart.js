// pages/cart/cart.js
var cartDatabase = require("../../data/cart.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      cartsDatabase:cartDatabase.Cart_database
    })
    console.log(this.data.cartsDatabase)

  },
  //获取产品对象
  getPorduct(){
    var productId = wx.getStorageInfoSync("id");
    var p = this.data.cartDatabase;
    for(var i = 0; i < p.length; i++){
      if (p[i].id == productId){
        this.setData({
          product:p[i]
        })
      }
    }
    console.log(this.data.product.src);
  },
  //合并付款事件
  checkboxChange(e){
    var sumPrice = 0;
    var num = e.currentTarget.id
    
    var p = this.data.cartDatabase
    console.log(p)
    //判断当前选中的元素是否被选中
    if(e.detail.id != ''){
      for(var i = 0; i < p.length; i++){
        if(p[i].id == num){
          this.setData({
            price:sumPrice +p[i].price
          })
        }
      }
    }else{
      for (var i = 0; i < p.length; i++) {
        if (p[i].id == num) {
          this.setData({
            price: this.data.price-p[i].price
          })
        }
      }
    }
    console.log(priceSum)

    this.setData({
      price: priceSum
    })

  }


})