const express = require('express');
const router = express.Router();

router.use('/user', require('./controller/user'));
router.use('/user/address', require('./controller/address'));

module.exports = router;