const express = require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server started successfully!');
});


module.exports = app;