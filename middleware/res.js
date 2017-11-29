const ValidateError = require('../error/validate-error');
const status = require('../error/response-status');

/**
 * response extension
 */
module.exports = (req, res, next) => {

    res.success = (data) => {
        return res.json({ status: status.SUCCESS, body: data });
    };

    res.failure = (err) => {
        if(typeof err === "string") {
            res.json({ status: status.SERVICE_ERROR, body:  err.toString() });
        } else if(err instanceof ValidateError) {
            res.json({ status: status.REQUEST_ERROR, body:  err.errors[0].msg });
        } else {
            res.json({ status: status.SERVICE_ERROR, body: err.message });
        }
    };

    return next();
};
