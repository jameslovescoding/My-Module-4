const express = require('express');
const path = require("path");
const app = express();
// Your code here

// Part 1
// app.use(express.static('assets'))

// Part 2
// app.use(express.static('assets/scripts'))

// Part 3
app.use("/stylesheets", express.static("assets/css"));
app.use("/css", express.static("assets/css"));
app.use("/scripts", express.static("assets/scripts"));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));