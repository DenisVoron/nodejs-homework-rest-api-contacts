const express = require('express');

const router = express.Router();

const { asyncWrapper } = require('../../helpers')

const {
    register,
    login
} = require('../../controllers/users');

const {
    registValidation,
    loginValidation
} = require('../../middlewares/authValidationMiddleware');

// const { schemas } = require('../../models/user');

router.post('/signup', registValidation, asyncWrapper(register));
router.post('/login', loginValidation, asyncWrapper(login));

module.exports = router;