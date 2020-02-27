// @ts-nocheck

const Pouchdb = require('pouchdb');
const path = require('path');
const systemDb = require('pouchdb-system-db');
const upsert = require('pouchdb-upsert');
const levelDbAdapter = require('pouchdb-adapter-leveldb');
const httpAdapter = require('pouchdb-adapter-http');

Pouchdb
	.plugin(upsert)
	.plugin(systemDb);
// console.log('Pouchdb: ', Pouchdb.adapter);

// Pouchdb.adapter('lev',httpAdapter,false);
// Pouchdb.adapter('leveldb',levelDbAdapter,false);



defaults = Pouchdb.defaults({ adapter: 'leveldb', prefix: path.resolve() + '/data/' });

module.exports = defaults;