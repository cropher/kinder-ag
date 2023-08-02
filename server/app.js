const express = require('express');

// import connectToDatabase function from dbconnection module
const connectToDatabase = require('./dbconnection');

// initialize express app
const app = express();

// ------------------------------------------------------------------------------------
// routes:

// get all articles
app.get('/articles', async (req, res) => {
  try {
    // Get the collection by calling the connectToDatabase function
    const collection = await connectToDatabase();

    // Fetch all documents from the collection
    const documents = await collection.find().toArray();

    // Send the documents as the response in JSON format
    res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the documents' });
  }
});

app.get('/articles/filter', async (req, res) => {
  try {
    // Get the collection by calling the connectToDatabase function
    const collection = await connectToDatabase();

    // Extract query parameters for filtering (e.g., /articles/filter?author=Max%20Meier&age=5)
    const { author, age } = req.query;

    // Build the filter object based on the query parameters
    const filter = {};
    if (author) {
      filter.author = author;
    }
    if (age) {
      filter.age = parseInt(age);
    }

    // Fetch documents from the collection based on the filter
    const documents = await collection.find(filter).toArray();

    // Send the filtered documents as the response in JSON format
    res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the documents' });
  }
});


// ---------------------------------------------------------------------------------
// express app
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
