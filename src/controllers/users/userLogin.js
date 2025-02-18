const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

// const {JWT_SECRET}= process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401, 'Email or password is wrong');
    }

    if (!user.verify) {
        throw HttpError(401, 'User is not authorized');
    }

    const passwordCompary = await bcrypt.compare(password, user.password);

    if (!passwordCompary) {
        throw HttpError(401, 'Email or password is wrong');
    }

    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '23h' });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
        token: token,
        email: user.email,
        subscription: user.subscription,
    })
};

module.exports = login;