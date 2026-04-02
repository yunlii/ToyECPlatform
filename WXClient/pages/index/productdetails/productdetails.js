// pages/index/productdetails/productdetails.js
Page({
  data: {
    productDetails: null
  },

  onLoad(option) {
    var _this = this;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('sentDataToTheOpenedPage', function(data) {
      _this.setData({productDetails: data})
    })
    console.log(this.data.productDetails);
  }

})