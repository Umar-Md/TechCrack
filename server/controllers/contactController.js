const transporter = require('../config/mail');

const handleLeadForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Processing lead for:", name); // Debugging log

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `🚀 TechCrack Lead: ${name}`,
    html: `
      <div style="font-family: sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 30px; border: 1px solid #00e5ff;">
        <h2 style="color: #00e5ff; border-bottom: 1px solid #333; padding-bottom: 10px;">New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp/Phone:</strong> ${phone}</p>
        <div style="margin-top: 20px; padding: 15px; background: #1a1a1a; border-radius: 8px;">
          <p><strong>Project Details:</strong></p>
          <p>${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
};

module.exports = { handleLeadForm };