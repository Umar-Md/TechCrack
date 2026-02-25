const express = require("express");
const router = express.Router();

const { handleLeadForm } = require("../controllers/contactController");

router.post("/send", handleLeadForm);

module.exports = router;