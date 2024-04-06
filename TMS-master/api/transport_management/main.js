// main.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { addUser, userList, fetchSingleUser } = require('./user/controllers/user-controller');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// CORS Headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
  next();
});

// Routes
app.post('/api/users', addUser);
app.get('/api/users', userList);
app.get('/api/users/:id', fetchSingleUser);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Transport-management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
