const express = require('express');

const router = express.Router();

const { asyncWrapper } = require('../../helpers')

const {
    registValidation,
    loginValidation,
    authenticate,
    upload
} = require('../../middlewares');

const {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar
} = require('../../controllers/users');

router.post('/signup', registValidation, asyncWrapper(register));
router.post('/login', loginValidation, asyncWrapper(login));
router.get('/current', authenticate, asyncWrapper(getCurrent));
router.get('/logout', authenticate, asyncWrapper(logout));
router.patch('/avatars', authenticate, upload.single('avatar'), asyncWrapper(updateAvatar));

module.exports = router;