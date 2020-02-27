// @ts-nocheck

const Pouchdb = require('pouchdb');

Pouchdb.plugin(require('pouchdb-upsert'))

module.exports = Pouchdb;