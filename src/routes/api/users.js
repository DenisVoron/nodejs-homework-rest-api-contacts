const express = require('express');

const router = express.Router();

const { asyncWrapper } = require('../../helpers')

const {
    registValidation,
    loginValidation
} = require('../../middlewares');

const {
    register,
    login
} = require('../../controllers/users');

// const { schemas } = require('../../models/user');

router.post('/signup', registValidation, asyncWrapper(register));
router.post('/login', loginValidation, asyncWrapper(login));

module.exports = router;