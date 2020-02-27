// @ts-nocheck

const Pouchdb = require('pouchdb');
const path = require('path');

Pouchdb.plugin(require('pouchdb-upsert'))
	
defaults = Pouchdb.defaults({prefix: path.resolve()+'/data/'}) 

module.exports = defaults;