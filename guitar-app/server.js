const express = require('express');
const app = express();
const port = 3000;

let exercises = [
    // Add your exercises here
];

app.get('/exercises', (req, res) => {
    res.json(exercises);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});