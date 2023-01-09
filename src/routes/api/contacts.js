const express = require('express');

const router = express.Router();

const {
  postValidation,
  putValidation,
  patchValidation
} = require('../../middlewares/walidationMiddleware');

const { asyncWrapper } = require('../../helpers')

const {
  getContacts,
  getContactsById,
  addContact,
  updateContactById,
  updateFavorite,
  deleteContact
} = require('../../controllers/contacts');

router.get('/', asyncWrapper(getContacts));
router.get('/:contactId', asyncWrapper(getContactsById));
router.post('/', postValidation, asyncWrapper(addContact));
router.put('/:contactId', putValidation, asyncWrapper(updateContactById));
router.patch('/:contactId/favorite', patchValidation, asyncWrapper(updateFavorite));
router.delete('/:contactId', asyncWrapper(deleteContact));

module.exports = router;