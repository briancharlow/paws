// index.js

require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Initialize Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Sample route for testing
app.get('/', (req, res) => {
    res.send('Welcome to Paws Backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
