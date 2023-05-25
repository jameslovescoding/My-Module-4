const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

const resourceNotFound = (req, res, next) => {
  let err = new Error("Sorry, the requested resource couldn't be found");
  next(err);
}

app.use(resourceNotFound);

app.use((err, req, res, next) => {
  res.statusCode = 404;
  return res.json({
    "message": "Sorry, the requested resource couldn't be found.",
    "statusCode": 404
  });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));