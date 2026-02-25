const {transporter} = require("../config/mail");

const handleLeadForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    console.log("Processing lead for:", name);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,

      subject: `🚀 TechCrack Lead: ${name}`,

      html: `
        <div style="font-family:sans-serif;background:#0a0a0a;color:#fff;padding:20px">
          <h2 style="color:#00e5ff">New Lead Received</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>

          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });

  }
};

module.exports = { handleLeadForm };