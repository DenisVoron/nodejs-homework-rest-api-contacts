const getContacts = require('./getContacts');
const getContactsById = require('./getContactsById')
const addContact = require('./addContact');
const updateContactById = require('./updateContactById');
const updateFavorite = require('./updateFavorite');
const deleteContact = require('./deleteContact');


module.exports = {
    addContact,
    getContacts,
    getContactsById,
    updateContactById,
    updateFavorite,
    deleteContact
}