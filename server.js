import express from 'express';
import { MongoClient } from 'mongodb';
import redis from 'redis';

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('MongoDB connection error:', err);
    return;
  }
  const db = client.db('files_manager');
  console.log('Connected to MongoDB');
});

// Connect to Redis
const redisClient = redis.createClient();
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Files Manager API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

