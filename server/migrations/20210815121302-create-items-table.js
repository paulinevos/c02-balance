"use strict";

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('Items', {
    hash: { type: 'string', primaryKey: true },
    description: {type: 'string', nullable: false},
    unit: {type: 'string', nullable: false},
    emission_per_unit: {type: 'bigint', nullable: false},
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('Items');
};

exports._meta = {
  "version": 1
};
