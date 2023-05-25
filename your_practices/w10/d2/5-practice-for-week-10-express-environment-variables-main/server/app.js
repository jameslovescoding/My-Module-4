const express = require('express');

require('dotenv').config();

const app = express();

// Your code here

// import .env


app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));