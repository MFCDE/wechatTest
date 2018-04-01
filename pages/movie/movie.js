var app = getApp();
var util = require('../../utils/util.js');

Page({
    data: {
        url: app.globalData.g_douban + "/v2/movie/top250",
        movies: [],
        title: '加载中',
    },
    onLoad: function () {
        var that = this;
        // wx.showLoading({
        //     title: '加载中...',
        //     success: function() {
        //         util.http(that.data.url, that.processDoubanData);
        //     }
        // });
        util.loadingHttp(that.data.url, this.processDoubanData);
    },
    /**
     * 处理豆瓣数据
     * @param  {[type]}
     * @return {[type]}
     */
    processDoubanData: function (data) {
        console.log(data);
        this.setData({
            title: '豆瓣电影top250',
            movies: data.subjects
        });
        wx.hideLoading();
    }
});