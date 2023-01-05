const Contact = require('../../models/contacts')
const { HttpError } = require('../../helpers');

const deleteContact = async (req, res, next) => {
    try {
        const id = req.params.contactId;
        const result = await Contact.findByIdAndRemove(id);
        if (!result) {
            throw HttpError(404);
        }
        res.status(200).json({ message: "contact deleted" });
    } catch (error) {
        next(error);
    }

}

module.exports = deleteContact;