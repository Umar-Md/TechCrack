const Razorpay = require('razorpay');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const transporter = require('../config/mail');

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(Number(amount) * 100), 
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed" });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email, pdfId } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({ status: "failure", message: "Invalid signature" });
    }

    const pdfMapping = {
      'java-qa': 'java.pdf',
      'js-qa': 'JavaScript.pdf',
      'python-qa': 'Python.pdf',
      'sql-qa': 'sql.pdf'
    };

    const fileName = pdfMapping[pdfId];
    const filePath = path.join(__dirname, '../assets/pdfs', fileName);

    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return res.status(404).json({ message: "PDF missing on server" });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `TechCrack: Your ${fileName} Guide`,
      text: `Payment Successful! Your guide is attached.`,
      attachments: [{ filename: fileName, path: filePath }]
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: "success", message: "Email sent" });

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
};