//create web server
const express = require('express');
const app = express();
const port = 3000;

//create server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//create comments array
const comments = [
    {
        id: 1,    }
];
