const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * request请求
 * @param  {[type]}
 * @param  {Function}
 * @return {[type]}
 */
function http(url, callback) {
    wx.request({
        url: url,
        header: {
            'Content-Type': 'application/json'
        },
        success: function (res) {
            callback(res.data);
            //加载完成关闭loading
            wx.hideLoading();
        }
    });
}

/**
 * 加载loding的时候请求数据
 * @param url
 * @param callback
 */
function loadingHttp(url, callback) {
    wx.showLoading({
        title: '加载中...',
        success: function (res) {
            http(url, callback);
        }
    })
}

module.exports = {
    formatTime: formatTime,
    http: http,
    loadingHttp:loadingHttp
}