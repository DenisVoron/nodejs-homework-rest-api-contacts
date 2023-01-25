const register = require('./userRegister');
const verify = require('./verify');
const reVerification = require('./reVerification');
const login = require('./userLogin');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');

module.exports = {
    register,
    verify,
    reVerification,
    login,
    getCurrent,
    logout,
    updateAvatar,
}