const register = require('./userRegister');
const login = require('./userLogin');
const getCurrent = require('./getCurrent');
const logout = require('./logout');

module.exports = {
    register,
    login,
    getCurrent,
    logout,
}