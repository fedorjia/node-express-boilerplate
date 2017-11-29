const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'users';

const co = () => {
	return mongo.collection(COLLECTION);
};

module.exports = {

	/**
	 * get users
	 */
	async get() {
		return await co().find()
			.sort({created_at: -1})
			.toArray();
	},

	/**
	 * add user
	 */
	async add(data) {
		// find
		let obj = await co().findOne({username: data.username});
		if(obj) {
			throw 'username_already_existed';
		}

		// save
		const now = Date.now();
		data.created_at = now;
		data.updated_at = now;
		data.addresses = [];
		obj = await co().save(data);

		return obj.ops[0]._id;
	},

	/**
	 * detail
	 */
	async detail(id) {
		return await co().findOne({_id:ObjectID(id)});
	}
};
