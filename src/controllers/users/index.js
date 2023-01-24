const register = require('./userRegister');
const login = require('./userLogin');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
}