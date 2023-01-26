const {
    postValidation,
    putValidation,
    patchValidation
} = require('./validationMiddleware');

const {
    registValidation,
    loginValidation,
    resendingValidation,
} = require('./authValidationMiddleware');

const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
    postValidation,
    putValidation,
    patchValidation,
    authenticate,
    registValidation,
    loginValidation,
    resendingValidation,
    upload,
}