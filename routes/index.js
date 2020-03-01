// @ts-nocheck

const
  { Pouchdb, defaultDoc } = require('../pouchdb'),
  express = require('express'),
  router = express.Router(),
  expressPouch = require('express-pouchdb'),
  path = require('path'),
  defaultDb = new Pouchdb('default',{prefix: path.resolve() + '/data/'});
defaultDb.upsert('mittens', (doc) => defaultDoc)
  .then(doc => console.log(doc))
  .catch(err => console.error(err));

router.use(expressPouch(Pouchdb, {

  configPath: path.resolve('./data/config.json'),

  logPath: path.resolve('./data/logs/log.txt'),

  mode: 'fullCouchDB'

}));

router.use('/default', expressPouch(defaultDb));

module.exports = router;



