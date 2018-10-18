const UserModel = require('../model/user')
const model = new UserModel()

module.exports = {

	/**
	 * get users
	 */
	async get() {
		return await model.get()
	},

	/**
	 * add user
	 */
	async add(data) {
		// find
		let obj = await model.findOne({username: data.username})
		if(obj) {
			throw 'username_already_existed'
		}

		// save
		const now = Date.now()
		data.created_at = now
		data.updated_at = now
		data.addresses = []
		return await model.insertOne(data)
	},

	/**
	 * detail
	 */
	async detail(id) {
		return await model.findById(id)
	}
}
