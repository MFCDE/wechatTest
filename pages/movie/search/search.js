var app = getApp();
var util = require("../../../utils/util.js");

Page({
    data: {
        movies: {}
    },
    onLoad: function (optios) {

    },
    onSearch: function (event) {
        var api = app.globalData.g_douban + "/v2/movie/search?q=" + event.detail.value;
        util.loadingHttp(api, this.processDoubanData);
    },
    processDoubanData: function (data) {
        console.log(data);
        this.setData({movies: data.subjects});
    }
});