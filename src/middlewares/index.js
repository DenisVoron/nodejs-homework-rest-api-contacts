const {
    postValidation,
    putValidation,
    patchValidation
} = require('./walidationMiddleware');

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