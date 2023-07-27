// MongoDB Database Connection Script:

// import 'mongo client' from mongoDB driver package:
// this line destructures the {MongoClient}-object 
// from the default value returned by require('mogodb')
const { MongoClient } = require('mongodb')

// we initialize the later used variable 'dbConnection' without a value
let dbConnection

// 'module.exports' is a method to export functions in nodeJS
module.exports = {

    // function to initially connect to the database
    // 'cb' is for callback-function which fires after we try to connect to the DB
    connectToDb: (cb) => {

        // connects mongoClient to DB and returns a promise which can be tagged with a .then method
        // NetNinja Tutorial: mongodb://localhost:27017/articles
        MongoClient.connect('mongodb://0.0.0.0:27017/')

            // the .then-method triggers a function when connection is complete
            // when connection is complete created a 'client'-object
            .then((client) => {

                // db-method returns an interface through which we can interact with the DB
                // we store this interface in a variable called 'dbConnection'
                dbConnection = client.db()

                // callback-function that fires after a successful connection attempt
                return cb()
            })

            // we attach a .catch method on the .then-method 
            // for when there is an error occurring during connection attempt
            .catch(err => {
                console.log(err)

                // callback function that fires after failed connection attempt
                // the 'err' (error) is passed in as an argument
                return cb(err)
            })
    },

    // function to return the db connection after connection happened
    getDb: () => dbConnection
}



// function to retrieve above created database connection


