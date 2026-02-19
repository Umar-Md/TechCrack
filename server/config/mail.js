const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or another SMTP provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // for Gmail with 2FA, use app password
  },
});

const sendMail = async (to, filePath) => {
  try {
    const fileName = filePath.split("/").pop() || filePath.split("\\").pop();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "Your purchased PDF",
      text: `Thanks for your purchase! Your file ${fileName} is attached.`,
      attachments: [{ filename: fileName, path: filePath }],
    });

    console.log("Mail sent successfully to:", to);
  } catch (error) {
    console.error("Mail sending error:", error);
    throw new Error("Mail sending failed: " + error.message);
  }
};

module.exports = sendMail;
