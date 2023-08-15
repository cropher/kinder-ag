const express = require('express');

// import connectToDatabase function from dbconnection module
const connectToDatabase = require('./dbconnection');

// initialize express app
const app = express();

console.log("start here")

// ------------------------------------------------------------------------------------
// routes:

// welcome
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the API'});
});

// Route 1
// get all articles
app.get('/articles', async (req, res) => {
  try {
    // Get the collection by calling the connectToDatabase function
    const db = await connectToDatabase();
    const collection = db.collection('articles');

    // Fetch all documents from the collection
    const documents = await collection.find({}).toArray();

    // Send the documents as the response in JSON format
    res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the documents' });
  }
});

// Route 2
// get articles filtered by location, age and competence
app.get('/articles/filter', async (req, res) => {
  try {
    // Get the collection by calling the connectToDatabase function
    const collection = await connectToDatabase();

    // Extract query parameters for filtering (e.g., /articles/filter?author=Max%20Meier&age=5)
    const queryParams = req.query;

    // Build the filter object based on the query parameters
    const filter = {};
       
    // Frontend-Schema: Multiple locations must be separated by a comma (http-encoding: '%2C') 
    // e.g. "localhost:5000/articles/filter?location=indoor%2Coutdoor"
    // sends back all activities which can be done indoor AND outdoor. All attributes must be matched
    // In contrast "localhost:5000/articles/filter?location=indoor" sends back all activities which 
    // can be done indoor, independent of other possible locations (e.g. indoor) for the activity
    if (queryParams.location) {
      // convert comma-seperated location options in the http string to an array
      const locationArray = queryParams.location.split(',');
      // create filter object's location key object with all-operator, so that all parameters must be matched
      filter.location = { $all: locationArray };
    }

    // possible age array values in database must be matched exactly -> eighter "under_3" or "over_3"
    if (queryParams.age) {
        
      filter.age = queryParams.age;
    }

    // Frontend-Schema: Multiple competences must be separated by a comma (http-encoding: '%2C') 
    // e.g. "localhost:5000/articles/filter?competence=music%2Csocial"
    // only sends back documents where $all parameters are matched
    if (queryParams.competence) {
        const competenceArray = queryParams.competence.split(',');
        filter.competence = { $all: competenceArray };
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

// Route 3
// get articles based on text-input, looks up regex in title, body and author
// e.g. "localhost:5000/articles/search?search=tanz"
app.get('/articles/search', async (req, res) => {
  try {
    // Get the collection by calling the connectToDatabase function
    const collection = await connectToDatabase();

    // Extract the search query parameter
    const { search } = req.query;

    // Build the filter object for the title search
    const filter = {
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { body: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ]
    };

    // Fetch documents from the collection based on the title search filter
    const documents = await collection.find(filter).toArray();

    // Send the search results as the response in JSON format
    res.json(documents);
  } catch (error) {
    console.error('Error searching for documents:', error);
    res.status(500).json({ error: 'Could not perform the search' });
  }
});

// ---------------------------------------------------------------------------------
// express app
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
