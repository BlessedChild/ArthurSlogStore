'use strict'

// 来自客户端的object
// 或者这么说 来自父级的 object
// 这里是客户端向服务端请求‘公告栏’的数据
// So object是空的



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