const Contact = require('../../models/contacts')

const addContact = async (req, res) => {
    const { _id: owner } = req.user;
    const {
        name,
        email,
        phone,
    } = req.body;

    const result = await Contact.create({ name, email, phone, owner });
    res.status(201).json(result);
}

module.exports = addContact;