'use strict'

// 来自客户端的object 和 express框架的 res
// 或者这么说 来自父级的 object 和 res
function func(object){
    if(object == null)
    {
        return `客户端传来的值是空的`
    }
    else if(object != null)
    {
        return `客户端传来的值是： ${object}`      
    }
    else{
        console.log('未知错误')
    }
}

module.exports = {
    func1: func
}