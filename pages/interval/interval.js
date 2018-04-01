var app = getApp();
var progressNum = 0;
var api = app.globalData.g_douban + "/v2/movie/top250";

Page({
    data: {
        time: 0
    },
    onLoad: function(options) {
        var that = this;
        var timer = setInterval(function() {
            progressNum += 10;
            if (progressNum >= 100) {
                clearInterval(timer);
            }
            that.setData({ time: progressNum });
        }, 500);
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    /**
     * 显示操作菜单
     * @return {[type]}
     */
    showAction: function() {
        wx.showActionSheet({
            itemList: ['功能1', '功能2', '功能3'],
            success: function(res) {
                console.log(res.tapIndex);
            }
        });
    },
    showModal: function() {
        var that = this;
        wx.showModal({
            title: '提示',
            content: '是否添加数据',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                    // that.showToast();
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    showToast: function() {
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 10000
        });

        setTimeout(function() {
            wx.hideToast();
        }, 1000);
    },
    /**
     * showTask过成中发起豆瓣请求演示
     * @return {[type]}
     */
    tastDouban: function() {
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            duration: 10000
        });

        wx.request({
            url: api,
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                wx.hideToast();
            }
        })
    }
})