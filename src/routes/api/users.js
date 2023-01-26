const express = require('express');

const router = express.Router();

const { asyncWrapper } = require('../../helpers')

const {
    registValidation,
    loginValidation,
    resendingValidation,
    authenticate,
    upload,
} = require('../../middlewares');

const {
    register,
    verify,
    reVerification,
    login,
    getCurrent,
    logout,
    updateAvatar
} = require('../../controllers/users');

router.post('/signup', registValidation, asyncWrapper(register));
router.post('/re_verify', resendingValidation, asyncWrapper(reVerification));
router.get('/verify/:verificationToken', asyncWrapper(verify));
router.post('/login', loginValidation, asyncWrapper(login));
router.get('/current', authenticate, asyncWrapper(getCurrent));
router.get('/logout', authenticate, asyncWrapper(logout));
router.patch('/avatars', authenticate, upload.single('avatar'), asyncWrapper(updateAvatar));

module.exports = router;