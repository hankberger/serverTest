// Import express
const express = require('express');

// Initialize express app
const app = express();

// Define route
app.get('/', (req, res) => {
    res.send('Congrats, you\'ve made your first server.');
});

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

// Define port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
