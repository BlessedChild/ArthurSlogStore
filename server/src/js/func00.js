'use strict'
// 引入全局配置文件
const config = require('../../main.js')

// 来自客户端的object
// 或者这么说 来自父级的 object
// 这里是客户端向服务端请求‘公告栏’的数据
// So object是空的

function func(object) {
    // 获取当前日期（不准确 因为含有函数调用的时间等影响）
    let currentDate = new Date()
    
    // 在控制台打印当前日期
    console.log(currentDate)

    let msg = config.BulletinBoardMsg + '[' + currentDate + ']'

    if (object == null) {
        return `客户端传来的值是空的`
    }
    else if (object != null) {
        // 这里 需要定义‘公告栏’的数据
        return msg
    }
    else {
        console.log('未知错误')
    }
}

module.exports = {
    ReturnBBInfo: func
}