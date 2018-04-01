Page({
    data: {
        radio: [
            {name: '中国', value: '1'},
            {name: '美国', value: '2'},
            {name: '俄罗斯', value: '3'},
            {name: '英国', value: '4', checked: true},
            {name: '法国', value: '5'}
        ]
    },
    onLoad: function (options) {

    },
    /**
     * switch选择事件
     * @param event
     */
    onBindSwitchChange: function (event) {
        console.log(event);
        console.log(event.detail.value);
    },
    /**
     * 拖动完一次slider组件触发的事件
     * @param event
     */
    onBindSliderChange: function (event) {
        console.log(event.detail.value);
    },
    /**
     * radio选择事件
     * @param event
     */
    onBindRadioChange: function (event) {
        console.log(event.detail.value);
    },
    /**
     * checkbox选择事件
     * @param event
     */
    onBindCheckBoxChange: function (event) {
        console.log(event.detail.value);
    },
    /**
     * 表单提交
     * @param event
     */
    formSubmit: function (event) {
        // console.log('触发了一个表单提交，提交的表单数据为:' + event.detail.value);
        console.log(event.detail.value);
    },
    /**
     * 表单重置
     * @param event
     */
    formReset: function (event) {
        console.log('触发了一个表单重置');
    }
});