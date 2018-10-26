'use strict'

// 向客户端返回‘商城首页’界面的数据

function func(object) {

    if (object == null) {
        return `客户端传来的值是空的`
    }
    else if (object != null) {
        // 这里 需要定义‘公告栏’的数据
        return '[欢迎来到ArthurSlogStore]' + '当前时间是： ' + '[' + new Date() + ']'
    }
    else {
        console.log('未知错误')
    }
}

module.exports = {
    ReturnBBInfo: func
}