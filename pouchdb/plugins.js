/**
 * Setup and configure pouchdb
 */
// @ts-nocheck
const
	Pouchdb = require('pouchdb'),
	path = require('path'),
	systemDb = require('pouchdb-system-db'),
	upsert = require('pouchdb-upsert'),
	levelDbAdapter = require('pouchdb-adapter-leveldb'),
	httpAdapter = require('pouchdb-adapter-http');

Pouchdb
	.plugin(upsert)
	.plugin(systemDb)
	.plugin(levelDbAdapter)
	.plugin(httpAdapter);

defaults = Pouchdb.defaults(
	{
		adapter: 'leveldb',
		prefix: path.resolve() + '/data/'
	}
);

module.exports = defaults;