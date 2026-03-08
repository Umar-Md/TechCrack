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
    const parsedAmount = Number(amount);
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return res.status(500).json({
        status: "error",
        message: "Razorpay keys are missing on server",
      });
    }

    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        status: "error",
        message: "Valid amount is required",
      });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(parsedAmount * 100),
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json({
      ...order,
      keyId,
    });
  } catch (error) {
    console.error("Create order error:", error);
    const razorpayErrorMessage =
      error?.error?.description || error?.description || error?.message;
    const isAuthIssue =
      /auth|authentication|key|secret|credential/i.test(
        String(razorpayErrorMessage || "")
      );

    res.status(500).json({
      status: "error",
      message: isAuthIssue
        ? "Razorpay authentication failed. Check server key ID/secret and test-live mode."
        : "Order creation failed",
      details: razorpayErrorMessage || null,
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
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return res.status(500).json({
        status: "error",
        message: "Razorpay key secret is missing on server",
      });
    }

    if (!email) {
      return res.status(400).json({
        status: "error",
        message: "Email is required",
      });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
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

    const pdfDir = path.join(__dirname, "..", "assets", "pdfs");
    let resolvedFileName = fileName;
    let filePath = path.join(pdfDir, resolvedFileName);

    if (!fs.existsSync(filePath) && fs.existsSync(pdfDir)) {
      const files = fs.readdirSync(pdfDir);
      const matched = files.find(
        (name) => name.toLowerCase() === fileName.toLowerCase()
      );

      if (matched) {
        resolvedFileName = matched;
        filePath = path.join(pdfDir, resolvedFileName);
      }
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        status: "error",
        message: "PDF not found",
      });
    }

    let emailSent = false;
    let emailError = null;

    try {
      await sendMail(email, filePath);
      emailSent = true;
    } catch (mailError) {
      emailError = mailError.message;
      console.error("Email send failed, continuing with download:", mailError);
    }

    res.json({
      status: "success",
      fileName: resolvedFileName,
      downloadUrl: "/pdfs/" + resolvedFileName,
      emailSent,
      message: emailSent
        ? "Payment verified and PDF emailed."
        : "Payment verified. Email failed, but direct download is available.",
      emailError,
    });
  } catch (error) {
    console.error("Verify error:", error);

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
