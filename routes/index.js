// @ts-nocheck
const express = require('express');

const router = express.Router();

const expressPouch = require('express-pouchdb');

const Pouchdb = require('../pouchdb');

const path = require('path');

const expressPouchApp = expressPouch(Pouchdb, {

  configPath: path.resolve('./data/config.json'),

  logPath: path.resolve('./data/logs/log.txt'),

  mode: 'fullCouchDB'

});

// expressPouchApp.use(express.static(path.resolve('./data')));

// expressPouchApp.use(express.static(path.resolve('./node_modules/pouchdb-fauxton')));

router.use(expressPouchApp)

module.exports = router;
