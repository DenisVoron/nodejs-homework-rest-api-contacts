const express = require('express');

const router = express.Router();

const {
  postValidation,
  putValidation,
  patchValidation,
  authenticate
} = require('../../middlewares');

const { asyncWrapper } = require('../../helpers')

const {
  getContacts,
  getContactsById,
  addContact,
  updateContactById,
  updateFavorite,
  deleteContact
} = require('../../controllers/contacts');

router.get('/', authenticate, asyncWrapper(getContacts));
router.get('/:contactId', authenticate, asyncWrapper(getContactsById));
router.post('/', authenticate, postValidation, asyncWrapper(addContact));
router.put('/:contactId', authenticate, putValidation, asyncWrapper(updateContactById));
router.patch('/:contactId/favorite', authenticate, patchValidation, asyncWrapper(updateFavorite));
router.delete('/:contactId', authenticate, asyncWrapper(deleteContact));

module.exports = router;