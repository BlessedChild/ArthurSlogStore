const express = require('express')
// 因为express无法解析POST的body数据，所以需要引入中间件body-parser来解析数据
const bodyParser = require('body-parser')

const Issue = require('./issue.js')

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
        else if(newIssue){
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

// 修改bottomTabBar的TabBar的文字
// 客户端传过来的数据结构
// {
//     count: int,
//     tabBar: []
// }
app.all('/api/changebottomTabBar', (req, res) => {
    console.log(req.body)
    const newDatas = req.body
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
        else if(newIssue){
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
        console.log('Client request is err!')
        return
    }

    console.log('POST: have a req from client')
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
