const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, 'Email in use');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });

    const msg = {
        to: 'denis.voronko@gmail.com',
        from: 'denis_vr@meta.ua',
        subject: 'Thank you for registration',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<h1>and easy to do anywhere, even with Node.js</h1>',
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    res.status(201).json({
        email: newUser.email,
    })
}

module.exports = register;