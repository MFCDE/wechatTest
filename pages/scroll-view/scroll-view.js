var arr = ['a', 'b', 'c'];
var index = 0;

Page({
    data: {
        intoView: '',
    },
    scrolltoupper: function (event) {
        console.log("up");
    },
    scrolltolower: function (event) {
        console.log("down");
        console.log(event);
    },
    scroll: function (event) {
        console.log(event);
    },
    onButton: function (event) {
        index++;
        if (index > arr.length - 1) {
            index = 0;
        }

        this.setData({
            intoView: arr[index]
        })
    }
});