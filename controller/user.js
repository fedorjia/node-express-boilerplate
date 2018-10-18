const express = require('express')
const router = express.Router({mergeParams: true})

const { body, validationResult } = require('express-validator/check')
const service = require('../service/user')
const ValidateError = require('../error/validate-error')


/**
 * add user
 */
router.post('', [
	body('username', 'username_required').trim().isLength({ min: 1 }),
	body('avatar', 'avatar_required').trim().isLength({ min: 1 })
], async (req, res, next) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.failure(new ValidateError(errors.array()))
		}

		const { username, avatar } = req.body
		// save user
		const uid = await service.add({
			username,
			avatar
		})
		// response
		res.success(uid)
	} catch (err) {
		next(err)
	}
})


/**
 * get users
 */
router.get('', async (req, res, next) => {
	try {
		res.success(await service.get())
	} catch (err) {
		next(err)
	}
})


/**
 * user detail
 */
router.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id
		res.success(await service.detail(id))
	} catch (err) {
		next(err)
	}
})

module.exports = router