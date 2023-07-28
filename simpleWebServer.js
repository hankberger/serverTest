// Import express
const express = require('express');
const path = require('path');

// Initialize express app
const app = express();

// Serve static files from current directory
app.use(express.static(path.join(__dirname, '.')));

// Define route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/market', (req, res) => {
    res.sendFile(path.join(__dirname, 'market.html'));
});

// Define port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
