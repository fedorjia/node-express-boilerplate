const ObjectID = require('mongodb').ObjectID

const AddressModel = require('../model/address')
const model = new AddressModel()

module.exports = {
	/**
	 * add address
	 */
	async add(uid, data) {
		let obj = model.findOneAndUpdate({_id: ObjectID(uid)},
			{
				$push: { addresses: data },
				$set: { updated_at: Date.now() }
			})
		if(!obj) {
			throw 'user_not_found'
		}
		return obj.value._id
	}
}
