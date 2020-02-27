
// @ts-nocheck
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.status(200).send('<h1>Hello Express Application</h1>');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
