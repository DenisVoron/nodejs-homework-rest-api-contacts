const Contact = require('../../models/contacts')

const addContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
        } = req.body;

        const result = await Contact.create({ name, email, phone });
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = addContact;