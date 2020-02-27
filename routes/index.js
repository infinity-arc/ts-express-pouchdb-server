
// @ts-nocheck
const express = require('express');
const router = express.Router();
const expressPouch = require('express-pouchdb');
const Pouchdb = require('../pouchdb');
const path = require('path');

router.use(expressPouch(Pouchdb,{
  configPath: path.resolve('./data/config.json'),
  logPath: path.resolve('./data/logs/log.txt'),
  mode: 'fullCouchDB',
}))

module.exports = router;
