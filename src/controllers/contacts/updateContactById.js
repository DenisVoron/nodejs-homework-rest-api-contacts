const Contact = require('../../models/contacts')

const updateContactById = async (req, res) => {
    const id = req.params.contactId;
    // const { name, email, phone } = req.body;
    const result = await Contact.findByIdAndUpdate(id, { ...req.body }, { new: true });
    res.status(200).json(result);
}

module.exports = updateContactById;