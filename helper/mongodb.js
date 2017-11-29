const format = require('util').format;
const setting = require('../setting');
const bluebird = require("bluebird");
const mongodb = require("mongodb");

// promise mongo
bluebird.promisifyAll(mongodb);

/***
 * connect db
 */
exports.connect = function() {
	return mongodb.MongoClient.connectAsync(format("mongodb://%s:%s/%s",
		setting.mongo.host,
		setting.mongo.port,
		setting.mongo.dbname));
};
