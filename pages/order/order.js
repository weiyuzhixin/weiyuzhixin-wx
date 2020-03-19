// pages/order/order.js
var statusDatabase = require('../../data/status.js');

Page({
  data: {
    active: 0
  },
  
  onLoad: function (options) {

    this.setData({
      statusDatabase: statusDatabase.Status_database
    })
    console.log(statusDatabase);
  }
});