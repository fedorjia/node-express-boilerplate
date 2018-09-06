const ObjectID = require('mongodb').ObjectID
const setting = require('../setting')
const DEFAULT_DB = setting.mongo.dbname

class Model {

	constructor({db = DEFAULT_DB, collection = null}) {
		this.collection = collection
		this.db = db
	}

	_co() {
		if(!this.database) {
			this.database = mongoClient.db(this.db)
		}
		return this.database.collection(this.collection)
	}

	/**
	 * save
	 */
	async insertOne(data) {
		const obj = await this._co().insertOne(data)
		return obj.ops[0]._id
	}

	/**
	 * findById
	 */
	async findById(id) {
		return await this._co().findOne({_id: ObjectID(id)})
	}

	/**
	 * findOne
	 */
	async findOne(q) {
		return await this._co().findOne(q)
	}


	/**
	 * findOneAndUpdate
	 */
	async findOneAndUpdate(q, data) {
		return await this._co().findOneAndUpdate(q, data)
	}

	/**
	 * get
	 */
	async get(q = {}, skip = null, limit = 20, sort = {_id: -1}) {
		if(skip) {
			return await this._co().find(q)
				.skip({
					_id: {
						'$lt': skip
					}
				})
				.limit(limit)
				.sort(sort)
				.toArray()
		} else {
			return await this._co().find(q)
				.limit(limit)
				.sort(sort)
				.toArray()
		}
	}
}

module.exports = Model
