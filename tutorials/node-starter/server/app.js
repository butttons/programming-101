const express = require('express');
const api = require('./api');

const app = express(); // Initialize express
app.use('/api', api); // Mount our api on /api

// Simple text greeting on /
app.get('/', (req, res) => {
    res.send('Hello worlds');
});

module.exports = app;
