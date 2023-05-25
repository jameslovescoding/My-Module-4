const express = require('express');

const router = express.Router();

// GET http://localhost:5000/people/

router.get("/", (req, res) => {
  res.json("Number 1");
});

// POST http://localhost:5000/people/1/likes

router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

// DELETE http://localhost:5000/people/1

router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

// GET http://localhost:5000/people/best-dressed/comments

router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

// GET http://localhost:5000/people/people/james/lookup

router.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;