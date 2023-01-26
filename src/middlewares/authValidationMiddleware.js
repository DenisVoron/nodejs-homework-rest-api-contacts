const Joi = require('joi');

// eslint-disable-next-line no-useless-escape
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = {
    registValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
            email: Joi.string().pattern(emailRegexp).required(),
            subscription: Joi.string(),
            token: Joi.string(),
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: "missing required field" })
        }

        next();
    },

    loginValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
            email: Joi.string().pattern(emailRegexp).required(),
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: "missing required field" })
        }

        next();
    },

    resendingValidation: (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string().required(),
        })

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: "missing required field email" })
        }

        next();
    }
}