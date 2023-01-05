const Contact = require('../../models/contacts')

const updateContactById = async (req, res, next) => {
    try {
        const id = req.params.contactId;
        const { name, email, phone } = req.body;
        const result = await Contact.findByIdAndUpdate(id, { name, email, phone }, { new: true });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateContactById;