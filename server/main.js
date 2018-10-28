// 这里面的后端接口 分为四类
// 第一类是提供给 消费者客户端的接口
// 第二类是提供给 商城管理者的接口
// 第三类是提供给 商城运营者的接口
// 第四类是提供给 商城开发者的接口

// 开发规范
// 所有数据的交互 都通过根目录下的 main.js 
// 其他任何文件 禁止上下路径的引用
// 例如：
// ./js/func1.js文件要引用 ./public/img/01.png文件的时候
// 禁止使用 require(../../public/img/o1.png) 或者 url(../../public/img/o1.png)
// 必须统一采用以下方式：
// const config = require('./main.js') 
// 箭头函数的使用：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 什么是回调？
// 初次见面
// 希望可以为您效劳
// 这是我的号码（代表）
// 所以如果发生了什么事（事件）
// 请打电话给我（回调）

// [] is array
// {} is object
// Arrays are Objects
// Arrays are a special type of objects
// The typeof operator in JavaScript returns "object" for arrays
// But, JavaScript arrays are best described as arrays
// Arrays use numbers to access its "elements". In this example, person[0] returns John:
// const person = ["John", "Doe", 46]
// Objects use names to access its "members". In this example, person.firstName returns John:
// const person = {firstName:"John", lastName:"Doe", age:46}
// 总结：
// {}里面放的是object
// 而[]是特殊的object
// 所以 可以写成{[], [], []}或{{}, {}, {}}这样的形式
// 也可以写成[{}, {}, {}]或[[], [], []]这样的形式

// 引入路径方案解决第三方包
// path.join()方法path使用特定于平台的分隔符作为分隔符将所有给定的段连接在一起 然后规范化生成的路径
// 零长度path段会被忽略 如果连接的路径字符串是零长度字符串 则返回'.' 表示当前工作目录
const path = require('path')

// 这里config作为一个object 所以使用{}
const config = {
    jsUrl: path.join(__dirname, "/src/js"),
    imgUrl: path.join(__dirname, "/src/public/img"),
    // 公告栏显示的信息
    BulletinBoardMsg: '[欢迎来到ArthurSlogStore]_当前时间是： ',
    serverPort: 3000,
    databaseBaseUrl: 'mongodb://localhost:27017',
    databaseName: 'issuetracker'
}
// 导出工程的配置文件
module.exports = config

// 引入demo
const Issue = require(path.join(config.jsUrl, "/issue.js"))
// 引入测试函数
const Func1 = require(path.join(config.jsUrl, "/func1.js"))
// 引入‘公告栏’函数
const BulletinBoard = require(path.join(config.jsUrl, "/func00.js"))

// 引入express框架
const express = require('express')
// 因为express无法解析POST的body数据，所以需要引入中间件body-parser来解析数据
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('static'))
app.use(bodyParser.json())

// 引入mongodb驱动
const MongoClient = require('mongodb').MongoClient
// 引入mongoose模块
var mongoose = require('mongoose')

// 接收到一个请求之后，返回一些数据
app.all('/api/issues/GET', (req, res) => {

    db.collection('issues').find().toArray()
        .then(issues => {
            const metadata = { total_count: issues.length }

            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With")
            res.header("Access-Control-Allow-Headers", "Content-Type")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8")

            res.json({ _metadata: metadata, records: issues })
        })
        .catch(err => {
            console.log('Error', err)

            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With")
            res.header("Access-Control-Allow-Headers", "Content-Type")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8")

            res.status(500).json({ message: `Internal Server Error: ${error}` })
        })

    console.log('GET: have a req from client')
    console.log('--------------------')
})


// 因为跨域请求，客户端每一次完整的通信都会发送两次请求
// 第一次请求是查看 "Access-Control-Allow-Origin" 等header的状态
// 状态允许才进行正式的通讯
// 所以，第一次的请求的里面是不包含我们定义的数据的，第二次才是
//
// 虽然在客户端定义的是POST方法，但由于跨域请求
// 客户端实际上发起了两个请求，第二个请求需要第一个请求的确认
// 如果第一次确认失败，那么第二个请求就不会发出
// 在这个过程中，第一次请求并不是POST方法，而是OPTIONS方法，所以这里使用all方法
// 当第一次请求成功后，第二次请求才是POST方法
// 这里直接用一个all来响应两次请求，不过分成两个请求应该也是可以
// 接收到一个请求之后，返回一些数据
app.all('/api/issues/POST', (req, res) => {
    console.log(req.body)
    const newIssue = req.body
    if (newIssue.owner) {
        console.log('Accept: ', newIssue)
        // newIssue.id = issues.length + 1
        newIssue.created = new Date()


        if (!newIssue.status)
            newIssue.status = 'New'

        // issues.push(newIssue)

        const err = Issue.validIssueStatus(newIssue)
        if (err) {
            res.status(422).json({ message: `Invalid request: ${err}` })
            return
        }

        if (!newIssue) {
            console.log('newIssue is null')
        }
        else if (newIssue) {
            db.collection('issues').insertOne(newIssue)
                .then(result => {
                    return db.collection('issues').find({ _id: result.insertedId }).limit(1).next()
                })
                .then(newIssue => {
                    if (newIssue) {
                        res.header("Access-Control-Allow-Origin", "*")
                        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
                        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
                        res.header("X-Powered-By", ' 3.2.1')
                        res.header("Content-Type", "application/json;charset=utf-8")
                        res.json(newIssue)
                    } else {
                        console.log('newIssue is null')
                        return
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.header("Access-Control-Allow-Origin", "*")
                    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
                    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
                    res.header("X-Powered-By", ' 3.2.1')
                    res.header("Content-Type", "application/json;charset=utf-8")
                    res.status(500).json({ message: `Internal Server Error: ${err}` })
                    console.log('newIssue is error')
                })
        }
    }
    else {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8")
        res.json(newIssue)
        console.log('Client request is null!')
        return
    }
    console.log('POST: have a req from client')
})

// 这个函数 接收客户端传过来的数据 
// 判断数据里面是否含有 bootomTabBar的值
// 根据四个bootomTabBar的值 来返回每个基础界面的数据
// 上面表述的不好理解 下面举个栗子
// 比如 这个函数 接收到一个数据data data里面包含有数据‘count’ 和 ‘tabBar’
// 并且‘count’等于1 ‘tabBar’也等于1
// 这代表了 客户端想要得到的 bootomTabBar数量是一个 想要得到的bootomTabBar是第一个（商城首页）
// 所以 通过这个函数
// 可以客户端可以请求到 第一个界面的数据、第二个界面的数据、第三个界面的数据、第四个界面的数据
// {
//     count: int, // 这个就是代表了本次要修改的bootomTabBar的数量
//     tabBar: []  // 这个就是代表了本次要修改的bootomTabBar
// }
//
// 这里其实还有另一种方式 就是全部的方法统一一个函数
// 具体是这么做的 例如 app.all('/api/POST', ...
// 那么 怎么判断客户端请求的是哪个功能呢？
// 是这样子的 是通过判断客户端传过来的数据data里面的特定的字段来判断的
// 可以这么看 就是根据客户端传过来的data里的‘func’的值 进行路由的
// 路由什么呢？ 路由到指定的功能函数
// 例如 客户端传过来的数据data里的‘func’==01
// 那么就路由到函数 func1 这个func1函数返回第一个界面的数据
// 如果 ‘func’==02
// 那么就路由到函数 func2 这个func2函数返回第二个界面的数据
// 以此类推
// 那么 想要这么做呢 就需要在后端进行严格的检查判断 需要一套工业级的机制
// 这么看来 有点像在写底层协议了 哈哈
// 包头+包体 的模式
//
// 客户端传过来的数据结构
// {
//     func: int, // 这个就相当于包头
//     object: [] // 这个就相当于包体
// }

app.all('/api/client', (req, res) => {
    // Print body's datas from client
    // 打印来自客户端的body里面的数据
    // 由于解决跨域机制的原因
    // 这里每次收到来自客户端的请求
    // 都会执行两次
    // 第一次body的值是空的
    // 第二次才是客户端发过来的真实数据
    console.log(req.body)
    console.log('--------------------')

    // Save data from the client to the recDatas object
    // 首先接收到来自客户端的数据 并保存在 recDatas对象里
    const recDatas = req.body

    // 接着 我们约定好的数据结构 就是 包头+包体
    // 也就是 func + object 这样的数据结构
    // 所以 首先判断func的值 然后根据不同的值 执行不同的函数
    switch (recDatas.func) {
        // 这个是前后端接口的测试功能
        case 0:
            console.log('接收到了func等于0的数据')
            res.header("Access-Control-Allow-Origin", "*")
            //res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
            //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            //res.header("X-Powered-By", ' 3.2.1')
            //res.header("Content-Type", "application/json;charset=utf-8")
            // 这里 我们把object传给函数进行处理 同时还需要把res也传给函数 可以对客户端做出反馈
            //const results = Func1.func1(recDatas.object)
            //res.json(results)
            //console.log(results)
            break;

        // 这个来写第一个正式功能
        // 这个写个什么功能好？给前端推点界面的数据好了
        // 这个就推给‘商城首页’里面‘公告栏’组件的数据好了
        // 首先 把功能写出来 单独一个js文件
        case 1:
            console.log('客户端请求公告栏的数据')
            console.log('--------------------')
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            //res.header("Content-Type", "application/json;charset=utf-8")
            let result = BulletinBoard.ReturnBBInfo(recDatas.object)
            res.json(result)
            break;
        case 2:
            Func1(recDatas.object, res);
            break;
        case 3:
            Func1(recDatas.object, res);
            break;
        case 4:
            Func1(recDatas.object, res);
            break;
        case 5:
            Func1(recDatas.object, res);
            break;
        case 6:
            Func1(recDatas.object, res);
        default:
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            //res.header("Content-Type", "application/json;charset=utf-8")
            res.json('error');
    }
})

// Database object
// 数据库对象
let db

// 数据操作函数区
// 数据库和集合： https://docs.mongodb.com/manual/core/databases-and-collections/

// Create database
// 创建数据库
// 在 MongoDB 中创建一个数据库 需要创建一个 MongoClient 对象
// 不指定数据库名 默认打开 test 数据库
// 然后指定数据库的 URL 和 端口
// 当数据库不存在时 MongoDB 会根据你给的 数据库名 创建新的数据库并建立连接
function create_MongodbDatabase(config) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(connection => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            // Returns the name of the current database
            // 返回当前数据库的名称
            console.log('数据库' + db.getName() + '创建成功')
            console.log('--------------------')
            return db
        })
        .then(db => {
            db.close()
        })
        .catch(err => {
            console.log('Error: ' + err)
            console.log('--------------------')
        })
}

// Create collection
// 创建集合（如果数据库和集合都不存在 那么会根据指定的数据库名和集合名创建新的数据库和集合）
// 有三种方式创建集合，例如：
// db.myNewCollection2.insertOne( { x: 1 } )
// db.myNewCollection3.createIndex( { y: 1 } )
// db.createCollection(name, options)
// options 的约定 请参考：https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection
// 在 MongoDB 的数据库中创建一个集合 需要创建一个 MongoClient 对象
// 然后指定数据库的 URL 和 端口
// 然后使用 createCollection() 方法来创建集合
function create_MongodbCollection(config) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(connection => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            db.createCollection('Slog')
            return db
        })
        .then(db => {
            console.log('集合创建成功')
            console.log('--------------------')
            db.close()
        })
        .catch(err => {
            console.log('Error: ' + err)
            console.log('--------------------')
        })
}

// Document operate
// 文档操作
// 与 MySQL 不同的是 MongoDB 会自动创建数据库和集合
// 所以使用前我们不需要手动去创建
// 向集合插入文档（document）
// 例如：
// document = { name: "ArthurSlog", url: "https://www.arthurslog.com" }
function create_MongodbDocument(collection, document) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在向集合 ' + collection + ' 插入文档...')
            db.collection(collection).insertOne(document)
                .then(result => {
                    console.log('文档插入成功')
                    console.log('插入结果 => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// 查询数据
// 查询条件： condition
// 例如：condition = {name:'ArthurSlog'}
function read_MongodbDocument(collection, condition) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在集合查询 ' + collection + ' 里的文档...')
            db.collection(collection).find(condition).toArray()
                .then(result => {
                    console.log('查询成功')
                    console.log('查询结果 => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// 更新数据
// 查询条件： condition
// 例如：condition = {name:'ArthurSlog'}
// 更新动作： updateAction
// 例如：updateAction = {$set: { url : "https://www.arthurslog.com" }}
function upade_MongodbDocument(collection, condition, updateAction) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在更新集合 ' + collection + ' 中的文档')
            db.collection(collection).updateOne(condition, updateAction)
                .then(result => {
                    console.log('文档更新成功')
                    console.log('更新结果 => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// 移除数据
// 查询条件： condition
// 例如：condition = {name:'ArthurSlog'}
function delete_MongodbDocument(collection, condition) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在集合 ' + collection + ' 中移除文档')
            db.collection(collection).deleteOne(condition)
                .then(result => {
                    console.log('文档移除成功')
                    console.log('移除结果 => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// 排序： 
// 按 type 字段升序
// sort_Mongodb = { type: 1 }  
// 按 type 字段降序
// sort_Mongodb = { type: -1 } 
// 例如：
// db.collection(collection).find().sort(sort_Mongodb).toArray()
// 对查询到的结果进行排序：

// 查询数据
// 查询条件： condition
// 例如：condition = {name:'ArthurSlog'}
function read_MongodbDocument(collection, condition, sort_Mongodb) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在集合查询 ' + collection + ' 里的文档...')
            db.collection(collection).find(condition).sort(sort_Mongodb).toArray()
                .then(result => {
                    console.log('排序成功')
                    console.log('排序结果' + '(' + ((sort_Mongodb == 1) ? '升序' : '降序') + ')' +  ' => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// 分页： 
// 查询的返回条数：limit_Mongodb

// 查询数据
// 查询条件： condition
// 例如：condition = {name:'ArthurSlog'}
function read_MongodbDocument(collection, condition, limit_Mongodb) {
    MongoClient.connect(config.databaseBaseUrl)
        .then(() => {
            // Connect specified database
            // 连接指定的数据库
            return connection.db(config.databaseName)
        })
        .then(db => {
            console.log('成功连接到' + '数据库' + db.getName())
            return db
        })
        .then(db => {
            console.log('正在集合查询 ' + collection + ' 里的文档...')
            db.collection(collection).find(condition).limit(limit_Mongodb).toArray()
                .then(result => {
                    console.log('查询成功')
                    console.log('查询结果 => ')
                    console.log(result)
                    console.log('--------------------')
                })
        })
}

// Enter point
// 程序的入口点
// Connect database base Url
// 连接数据库的基地址（连接成功后才连接指定的数据库）
MongoClient.connect(config.databaseBaseUrl, { useNewUrlParser: true })
    .then(connection => {
        // Connect specified database
        // 连接指定的数据库
        db = connection.db(config.databaseName)
    })
    .then(() => {
        // Start server 
        // 启动服务
        app.listen(config.serverPort, () => {
            console.log('Server start on port: ' + config.serverPort)
        })
    })
    .catch(err => {
        // Print error informations on console
        // 打印出错信息
        console.log('Error: ', err)
    })