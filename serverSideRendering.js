// Import express
const express = require('express');

// Initialize express app
const app = express();

app.get('/', (req, res) => {
    const path = req.originalUrl.slice(1);  // slice(1) to remove the leading "/"
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Dynamic Page</title>
        </head>
        <body>
            <h1>type localhost:3000/id/[Your ID] in your browser.</h1>
        </body>
        </html>
    `);
})

// Define route
app.get('/id/*', (req, res) => {
    const path = req.originalUrl.slice(4);  // slice(1) to remove the leading "/"
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Dynamic Page</title>
        </head>
        <body>
            <h1>You are user: ${path}</h1>
        </body>
        </html>
    `);
});

// Define port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});