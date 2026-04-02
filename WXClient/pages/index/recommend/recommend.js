// pages/index/recommend/recommend.js
Page({
  data: {
    toView: 'green',
    products: [
      {
        id: 11223344,
        name: "babycare洛伊积木城堡",
        discountedprice: 149,
        price: 245,
        soldout: 77
      },
      {
        id: 11223344,
        name: "babycare洛伊积木城堡",
        discountedprice: 149,
        price: 245,
        soldout: 77
      }
    ]
  },
  toPreSalePage: function() {
    wx.navigateTo({
      url: '/pages/index/recommend/productpresale/productpresale',
    })
  },
  toSecondHandGoodsPage: function() {
    wx.navigateTo({
      url: '/pages/index/recommend/secondhandgoods/secondhandgoods',
    })
  },
  toPopularityRankingList: function() {
    wx.navigateTo({
      url: '/pages/index/recommend/popularityrankinglist/popularityrankinglist',
    })
  },
  toProductDetailsPage: function(e) {
    var productdetail = e.currentTarget.dataset.product;
    wx.navigateTo({
      url: '/pages/index/productdetails/productdetails',
      success: function(res) {
        res.eventChannel.emit('sentDataToTheOpenedPage', productdetail )
      }
    })
  },
  toTestPage: function() {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  }
})