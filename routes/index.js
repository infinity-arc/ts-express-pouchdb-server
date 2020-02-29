// @ts-nocheck

const {Pouchdb,defaultDoc} = require('../pouchdb');

const express = require('express');

const router = express.Router();

const expressPouch = require('express-pouchdb');

const path = require('path');

const defaultDb = new Pouchdb('default');

defaultDb.upsert('mittens',(doc)=>defaultDoc).then(doc=>console.log(doc)).catch(err=>console.error(err));

router.use(expressPouch(Pouchdb, {

  configPath: path.resolve('./data/config.json'),

  logPath: path.resolve('./data/logs/log.txt'),

  mode: 'fullCouchDB'

}));

router.use('/default',expressPouch(defaultDb));

module.exports = router;
