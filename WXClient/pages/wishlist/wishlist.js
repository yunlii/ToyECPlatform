// pages/wishlist/wishlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareCoverStatus: false
  },
  openTheShareCover() {
    this.setData({shareCoverStatus: true})
  },
  closeTheShareCover() {
    this.setData({shareCoverStatus: false})
  }
})