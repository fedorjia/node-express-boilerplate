const Model = require('./index')

module.exports = class extends Model {

	constructor() {
		super({collection: 'addresses'})
	}
}
