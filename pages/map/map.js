Page({
    data: {
        //标记点,是个数组，可以有多个值
        markers: [
            {
                id: 0,
                iconPath: "/images/markers.jpg",
                latitude: 23.099994,
                longitude: 113.324520,
                width: 50,
                height: 50
            },
            // {
            //     id: 1,
            //     iconPath: "/images/markers.jpg",
            //     latitude: 23.099994,
            //     longitude: 113.324520,
            //     width: 10,
            //     height: 10
            // }
        ],
        //路线
        polyline: [
            {
                //经纬度数组,用来连接路线图形
                points: [
                    {
                        longitude: 113.3245211,
                        latitude: 23.10229
                    },
                    {
                        longitude: 113.324520,
                        latitude: 23.21229
                    }
                ],
                color: "#FF0000DD",
                width: 6
            }
        ]
    },
    /**
     * 点击标记点
     * @param event
     */
    markertap: function (event) {
        wx.openLocation({
            latitude: 23.099994,
            longitude: 113.324520
        });
    }
});