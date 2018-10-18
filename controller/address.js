const express = require('express')
const router = express.Router({mergeParams: true})

const { query, body, validationResult } = require('express-validator/check')

const service = require('../service/address')
const ValidateError = require('../error/validate-error')

/**
 * add address
 */
router.post('', [
	query('uid', 'uid_required').trim().isLength({ min: 1 }),
	body('name', 'name_required').trim().isLength({ min: 1 }),
	body('mobile', 'mobile_required').trim().isLength({ min: 1 }),
	body('address', 'address_required').trim().isLength({ min: 1 })
], async (req, res, next) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.failure(new ValidateError(errors.array()))
		}

		const { uid } = req.query
		const { name, mobile, address } = req.body

		// add address
		const obj = await service.add(uid, {
			name,
			mobile,
			address
		})
		// response
		res.success(obj)
	} catch (err) {
		next(err)
	}
})

module.exports = router