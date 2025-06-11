// index.js
Page({
  data: {
    selectStatus: 1,
  },
  testclick: function(Event) {
    this.setData({selectStatus: Event.currentTarget.dataset.status});
    console.log(wx.getWindowInfo());
  }
})
