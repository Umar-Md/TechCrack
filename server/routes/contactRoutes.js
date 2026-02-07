const express = require('express');
const router = express.Router();
const { handleLeadForm } = require('../controllers/contactController');

// This defines the sub-path. Combined with index.js, this is /api/contact/send
router.post('/send', handleLeadForm);

module.exports = router;