// 这里面的后端接口 分为四类
// 第一类是提供给 消费者客户端的接口
// 第二类是提供给 商城管理者的接口
// 第三类是提供给 商城运营者的接口
// 第四类是提供给 商城开发者的接口

const express = require('express')
// 因为express无法解析POST的body数据，所以需要引入中间件body-parser来解析数据
const bodyParser = require('body-parser')

const Issue = require('./issue.js')
// 引入函数
const Func1 = require('./func1.js')

// 引入mongodb驱动
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.static('static'))
app.use(bodyParser.json())


/*
// 接收到请求后返回的数据
const issues = [
    {
        id: 1,
        status: 'Open',
        owner: 'Ravan',
        created: new Date('2018-08-18'),
        effort: 5,
        completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        created: new Date('2018-08-20'),
        effort: 14,
        completionDate: new Date('2018-08-22'),
        title: 'Missing bottom border on panel',
    },
]
*/

/*
// 接收到一个请求之后，返回一些数据
app.all('/api/issues/GET', (req, res) => {
    const metadata = { total_count: issues.length }

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")

    res.json({ _metadata: metadata, records: issues })

    console.log('GET: have a req from client')
})
*/


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


    /*
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "X-Powered-By": ' 3.2.1',
        "Content-Type": "application/json"
    });
    */

    /*
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    */

    // res.json(newIssue)

    /*
    const err = Issue.validIssueStatus(newIssue)
    console.log('POST: have a req from client')
    console.log(err)
    */

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
    console.log(req.body)
    // 接到来自客户端的数据
    /*
    const newDatas = req.body
    // 对接受到的数据进行检测判断 这里是第一种方式
    if ((newDatas.count != 0) && (newDatas.count < 5)) {
        console.log('Accept: ', newDatas)
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
        // 如果接收到的数据不符合预期
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8")
        res.json(newIssue)
        console.log('Client request is err!')
        return
    }

    console.log('POST: have a req from client')
    */

    // 现在采用第二种方式
    // 首先接收到来自客户端的数据 并保存在 recDatas对象里
    const recDatas = req.body
    // 接着 我们约定好的数据结构 就是 包头+包体
    // 也就是 func + object 这样的数据结构
    // 所以 首先判断func的值 然后根据不同的值 执行不同的函数
    switch (recDatas.func) {
        case 0:
            console.log('接收到了func等于0的数据')
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8")
            // 这里 我们把object传给函数进行处理 同时还需要把res也传给函数 可以对客户端做出反馈
            const results = Func1.func1(recDatas.object)
            res.json(results)
            console.log(results)
            break;
        case 1:
            Func1(recDatas.object, res);
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
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8")
            res.json('error');
    }
})

/*
// 开启web服务器，监听 3000 端口 
app.listen(3000, () => {
    console.log('Server start on port 3000 ')
})
*/

let db
/*
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'issuetracker';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect()
    .then(() => {
        console.log("Connected successfully to server");

        db = client.db(dbName);

        app.listen(3000, () => {
            console.log('Server start on port 3000 ')
        })
    })
    .catch(err => {
        console.log('Error: ', err)
    })
*/


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
    .then(connection => {
        db = connection.db('issuetracker')
        app.listen(3000, () => {
            console.log('Server start on port 3000 ')
        })
    })
    .catch(err => {
        console.log('Error: ', err)
    })
