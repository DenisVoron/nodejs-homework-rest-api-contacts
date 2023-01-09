const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { HttpError } = require('../../helpers');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401, 'Email or password is wrong');
    }

    const passwordCompary = await bcrypt.compare(password, user.password);

    if (!passwordCompary) {
        throw HttpError(401, 'Email or password is wrong');
    }
};


module.exports = login;