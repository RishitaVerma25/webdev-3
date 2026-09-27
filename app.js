require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/my_local_db';

// Middleware
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('MongoDB Connection App is running!');
});

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Successfully connected to local MongoDB.');
        // Start server only after DB connection
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
