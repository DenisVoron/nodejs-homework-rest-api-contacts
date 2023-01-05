const Contact = require('../../models/contacts')


const getContacts = async (req, res) => {
    try {
        const result = await Contact.find({});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getContacts;