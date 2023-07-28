const express = require('express');

// import functions from db module
const { connectToDb, getDb } = require('./db')

// initialize app & middleware
const app = express();

// establish database connection:

// initialize variable for db connection
let db

// this is the callback function
connectToDb((err) => {
    if (!err) {
        app.listen(27017, () => {
            console.log('Server is running on Port 5000');
        })
        // call getDb function and assign the connection to
        // an object called 'db' to be used in endpoint handler functions
        db = getDb()
    }
})

// Routes:

// get all articles
app.get('/articles', (req, res) => {
    // define empty array where fetched documents will get pushed to
    let articles = []

    // define the desired collection with the connection method
    db.connection('articles')

        // .find-method returns a 'cursor'-object which points to the documents outlined by the query
        // .find()-arguments contain the filter conditions
        .find()

        // based on the cursor above, create a new cursor which has documents sorted by author name (A-Z)
        .sort({ author: 1})
        
        // forEach iterates through all documents of the current batch and allows to process each one individually
        .forEach(article => articles.push(article))
        // we could have used "toArray()" as well
        // toArray fetches - in batches of 101 (default) - all documents that the cursor points to and puts them in an array
        // for small batches "toArray()" is preferred

        // fire a function when forEach method execution is finished
        // functions sends a status(200) to the user (200: "All okay")
        // function sends the articles array as json string to the client which made the get request
        .then(() => {
            res.status(200).json(articles)
        })

        // .catch method sends a status error(500) (500: "Server error") and error message as json string
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
});

// server connection successful?
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the API'})
})
