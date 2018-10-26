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

// The process object is a global that provides information about, 
// and control over, the current Node.js process. As a global,
// it is always available to Node.js applications without using require()

/*
The process.argv property returns an array containing the 
command line arguments passed when the Node.js process was launched. 
The first element will be process.execPath. See process.
argv0 if access to the original value of argv[0] is needed.
The second element will be the path to the JavaScript file being executed.
The remaining elements will be any additional command line arguments.

For example, assuming the following script for process-args.js:

// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
Launching the Node.js process as:

$ node process-args.js one two=three four
Would generate the output:

0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
*/
// 'process.argv.length < 3' means 'no command line arguments'
// Just 'node ./trymongo.js'
if (process.argv.length < 3) {
    console.log("Incorrect number of arguments")
    usage()
} else {
    // This means 'process.argv.length >= 3' and 'have a command line arguments process.argv[2]'
    // Like 'node ./trymongo.js callbacks'
    if (process.argv[2] === 'callbacks') {
        testWithCallbacks()
    }
    // Like 'node ./trymongo.js promises'
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

// Add database and insert informations
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