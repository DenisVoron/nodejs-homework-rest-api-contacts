const Contact = require('../../models/contacts');

const updateFavorite = async (req, res) => {
    const id = req.params.contactId;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(result);
}

module.exports = updateFavorite;