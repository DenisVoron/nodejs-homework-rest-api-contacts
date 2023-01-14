const Contact = require('../../models/contacts')
const { HttpError } = require('../../helpers');

const getContactsById = async (req, res) => {
    const id = req.params.contactId;
    const result = await Contact.findById(id);
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
}

module.exports = getContactsById;