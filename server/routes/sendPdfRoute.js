const express = require("express");
const generatePDF = require("./pdf");
const sendMail = require("./mail");

const router = express.Router();

router.post("/send-pdf", async (req, res) => {
  try {
    const { email, data } = req.body;

    console.log("Entered email:", email); // debug

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const pdfPath = await generatePDF(data);

    await sendMail(email, pdfPath); // use entered email

    res.json({
      success: true,
      message: "PDF sent successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error sending PDF",
    });
  }
});

module.exports = router;
