// MongoDB Atlas User
// claudeGable
// DbRWfUUkl0kcUj15

const { MongoClient } = require('mongodb');

let dbConnection;

// Replace the placeholder with your actual MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://claudeGable:DbRWfUUkl0kcUj15@cluster48153.wnmcmz8.mongodb.net/?retryWrites=true&w=majority';

// Replace the placeholder with your actual database name
const DB_NAME = 'frükibi';

// Function to establish the database connection and return the collection
async function connectToDatabase() {
  try {
    if(dbConnection){
      return dbConnection;
    }
    else{
      // Connect to the MongoDB Atlas cluster
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      // Access the specified database
      dbConnection = client.db(DB_NAME);

      // Access the specified collection and return it
      return dbConnection;
    }
    
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
