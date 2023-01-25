const { HttpError, sendEmail } = require('../../helpers');
const { BASE_URL } = process.env;
const { User } = require('../../models/user');

const reVerification = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user.email) {
        throw HttpError(401);
    }

    const { verificationToken } = user;

    if (verificationToken === null) {
        throw HttpError(400, 'Verification has already been passed');
    }

    const verifyEmail = {
        to: email,
        subject: 'Verify email',
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
    }

    await sendEmail(verifyEmail);

    res.json({
        email,
    })
}

module.exports = reVerification;