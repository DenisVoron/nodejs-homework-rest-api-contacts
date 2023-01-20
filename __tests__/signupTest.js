/* eslint-disable no-undef */
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const { login } = require('../src/controllers/users');
// const { User } = require('../src/models/user');
// const { HttpError } = require('../src/helpers');

/**
 * describe('Contact service test signup', () => {
    test('Must login a return the contact details', async () => {
        const mReq = {
            body: {
                email: 'aswer@email.com',
                password: '12345'
            }
        };

        /// const { email, password } = mReq.body

        /// const passwordCompary = await bcrypt.compare(password, user.password);

        if (!passwordCompary) {
            throw HttpError(401, 'Email or password is wrong');
        }
        const user = {
            _id: '1',
            email: 'aswer@email.com',
            subscription: 'PRO',
        }

        const payload = {
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '23h' });


        const mRes = {
            status: '200',
            token: token,
            user,
        }

        jest.spyOn(User, 'findOne').mockImplementationOnce(async () => mRes);

        const result = await login(mReq, mRes);

        expect(result.status).toEqual(mRes.status);
        expect(result.token).toEqual(mRes.token);
        expect(result.user.email).toEqual(mRes.user.email);
        expect(result.user.subscription).toEqual(mRes.user.subscription);
    });
});
 */