const Contact = require('../../models/contacts')


const getContacts = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(req.user)
    const result = await Contact.find({ owner }).populate('owner', "email");
    res.status(200).json(result);
}

module.exports = getContacts;