const express = require('express');

const app = express();

app.get("/status", (req, res) => {
  res.send("The server is alive!");
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
})