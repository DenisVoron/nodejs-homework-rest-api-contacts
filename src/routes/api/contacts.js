const express = require('express');

const router = express.Router();

const {
  postValidation,
  putValidation,
  patchValidation
} = require('../../middlewares/walidationMiddleware');

const {
  getContacts,
  getContactsById,
  addContact,
  updateContactById,
  updateFavorite,
  deleteContact
} = require('../../controllers/contacts');

router.get('/', getContacts);
router.get('/:contactId', getContactsById);
router.post('/', postValidation, addContact);
router.put('/:contactId', putValidation, updateContactById);
router.patch('/:contactId/favorite', patchValidation, updateFavorite);
router.delete('/:contactId', deleteContact);

module.exports = router;