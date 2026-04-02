// pages/index/recommend/popularityrankinglist/popularityrankinglist.js
Page({
  data: {
    selectStatus: 1,
  },
  switchClick: function(Event) {
    this.setData({selectStatus: Event.currentTarget.dataset.status});
  }
})