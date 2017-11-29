const util = require('util');

const ValidateError = function ValidateError(errors) {
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.errors = errors;
};

util.inherits(ValidateError, Error);

module.exports = ValidateError;