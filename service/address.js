const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'users';

const co = () => {
	return mongo.collection(COLLECTION);
};

module.exports = {

	/**
	 * add address
	 */
	async add(uid, data) {
		let obj = await co().findOneAndUpdate({_id: ObjectID(uid)},
			{
				$push: { addresses: data },
				$set: { updated_at: Date.now() }
			});
		if(!obj) {
			throw 'user_not_found';
		}
		return obj.value._id;
	}
};
