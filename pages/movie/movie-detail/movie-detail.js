var app = getApp();
var util = require("../../../utils/util.js");
//不要定义在这里，当返回的时候api并没有销毁，下载再点击进来后还是/上次的ID
// var api = app.globalData.g_douban + "/v2/movie/subject/";

Page({
    data: {
        movie: {}
    },
    onLoad: function (options) {
        var api = app.globalData.g_douban + "/v2/movie/subject/";
        api += options.id;
        console.log(api);
        util.loadingHttp(api, this.processDoubanData);
    },
    processDoubanData: function (data) {
        console.log(data);
        this.setData({movie: data});
    }
});