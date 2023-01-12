const express = require('express');

const router = express.Router();

const { asyncWrapper } = require('../../helpers')

const {
    registValidation,
    loginValidation,
    authenticate
} = require('../../middlewares');

const {
    register,
    login,
    getCurrent,
    logout,
} = require('../../controllers/users');

router.post('/signup', registValidation, asyncWrapper(register));
router.post('/login', loginValidation, asyncWrapper(login));
router.get('/current', authenticate, asyncWrapper(getCurrent));
router.get('/logout', authenticate, asyncWrapper(logout));

module.exports = router;