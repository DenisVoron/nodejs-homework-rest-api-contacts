const {
    postValidation,
    putValidation,
    patchValidation
} = require('./validationMiddleware');

const {
    registValidation,
    loginValidation,
} = require('./authValidationMiddleware');

const authenticate = require('./authenticate');

module.exports = {
    postValidation,
    putValidation,
    patchValidation,
    authenticate,
    registValidation,
    loginValidation,
}