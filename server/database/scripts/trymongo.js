'use strict'

const MongoClient = require('mongodb')

function usage() {
    console.log('Usage:')
    console.log('node', __filename, '<option>')
    console.log('Where option is one of:')
    console.log(' callbacks Use the callbacks paradigm')
    console.log(' promises Use the Promises paradigm')
    console.log(' generator Use the Generator paradigm')
    console.log(' async Use the async module')
}

if (process.argv.length < 3) {
    console.log("Incorrect number of arguments")
    usage()
} else {
    if (process.argv[2] === 'callbacks') {
        testWithCallbacks()
    }
    if (process.argv[2] === 'promises') {
        testWithPromises()
    }
    if (process.argv[2] === 'generator') {
        testWithGenerator()
    }
    if (process.argv[2] === 'async') {
        testWithAsync()
    } else {
        console.log("Invalid option:", process.argv[2])
        usage()
    }
}

function testWithCallbacks() {
    MongoClient.connect('mongodb://localhost/playground', function (err, db) {
        db.collection('employees', insertOne({ id: 1, name: 'A. Callback' },
            function (err, result) {
                console.log("Result of insert:", result.insertedId)
                db.collection('employees').find({ id: 1 }).toArray(function (err, docs) {
                    console.log('Result of find:', docs)
                    db.close()
                })
            }
        ))
    })
}

function testWithPromises() {
    let db
    MongoClient.connect('mongodb://localhost/playground').then(connection => {
        db = connection
        return db.collection('employees').insertOne({ id: 1, name: 'B. Promises' })
        }).then(result => {
            console.log("Result of insert:", result.insertedId)
            return db.collection('employees').find({ id: 1 }).toArray()
        }).then(docs => {
            console.log('Result of find:', docs)
            db.close()
        }).catch(err => {
            console.log('Error', err)
        })
}