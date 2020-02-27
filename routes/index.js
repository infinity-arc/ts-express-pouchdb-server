
// @ts-nocheck
const express = require('express');
const router = express.Router();
const expressPouch = require('express-pouchdb');
const Pouchdb = require('../pouchdb');

router.use(expressPouch(Pouchdb))

module.exports = router;
