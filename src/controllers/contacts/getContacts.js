const Contact = require('../../models/contacts')


const getContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10, favorite } = req.query;
    console.log(typeof favorite)
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner }, '-createdAt -updatedAt')
        .skip(skip)
        .limit(limit)
        .sort({ favorite: true, type: 'Boolean' })
        .populate('owner', "email");
    res.status(200).json(result);
}

module.exports = getContacts;

/** .skip(page)
        .limit(limit) { favorite: { $eq: favorite } } */