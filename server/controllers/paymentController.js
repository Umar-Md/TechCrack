// server/controllers/paymentController.js
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const { sendMail } = require("../config/mail"); // fixed import

/*
==============================
CREATE ORDER
==============================
*/
exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        status: "error",
        message: "Amount is required",
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    console.error("Create order error:", error);

    res.status(500).json({
      status: "error",
      message: "Order creation failed",
    });
  }
};

/*
==============================
VERIFY PAYMENT
==============================
*/
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email,
      pdfId,
    } = req.body;

    if (!email) {
      return res.status(400).json({
        status: "error",
        message: "Email is required",
      });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        status: "error",
        message: "Invalid signature",
      });
    }

    const pdfMap = {
      java: "Java.pdf",
      javascript: "JavaScript.pdf",
      python: "Python.pdf",
      sql: "sql.pdf",
      email_resume_templates: "Email_Resume_templates.pdf",
      "email-resume-templates": "Email_Resume_templates.pdf",
    };

    const normalized = String(pdfId).toLowerCase().trim();
    const fileName = pdfMap[normalized];

    if (!fileName) {
      return res.status(400).json({
        status: "error",
        message: "Invalid PDF ID",
      });
    }

    const filePath = path.join(__dirname, "..", "assets", "pdfs", fileName);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        status: "error",
        message: "PDF not found",
      });
    }

    await sendMail(email, filePath);

    res.json({
      status: "success",
      fileName,
      downloadUrl: "/pdfs/" + fileName,
    });
  } catch (error) {
    console.error("Verify error:", error);

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
