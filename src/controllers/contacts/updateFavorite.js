const Contact = require('../../models/contacts');

const updateFavorite = async (req, res, next) => {
    try {
        const id = req.params.contactId;
        const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateFavorite;