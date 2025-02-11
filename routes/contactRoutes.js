
const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// Route to get all contacts
router.get('/contacts', getAllContacts);

// Route to get a single contact by ID
router.get('/contacts/:id', getContactById);

// Route to create a new contact
router.post('/contacts', createContact);

// Route to update a contact by ID
router.put('/contacts/:id', updateContact);

// Route to delete a contact by ID
router.delete('/contacts/:id', deleteContact);

module.exports = router;
