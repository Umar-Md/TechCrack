// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendMail = async (to, filePath) => {
//   try {
//     // Extract filename with extension (sql.pdf)
//     const fileNameWithExt =
//       filePath.split("/").pop() || filePath.split("\\").pop();

//     // Remove extension → sql
//     const fileName = fileNameWithExt.replace(/\.[^/.]+$/, "");

//     await transporter.sendMail({
//       from: `"TechCrack" <${process.env.EMAIL_USER}>`,
//       to,
//       subject: "🚀 Your Interview Preparation Material is Ready!",

//       text: `Hi,

// Thank you for purchasing our interview preparation material.

// Your material is attached to this email and is ready for use.

// We hope this helps you prepare effectively and succeed in your upcoming interviews.

// If you have any questions or face any issues accessing the material, please feel free to reply to this email. Our team will be happy to assist you.

// Thank you for choosing TechCrack.

// Best regards,  
// TechCrack Team`,

//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #2E86C1;">🚀 Your Interview Preparation Material is Ready!</h2>

//           <p>Hi there,</p>

//           <p>
//             Thank you for purchasing our interview preparation material.
//           </p>

//           <p>
//             Your material is attached to this email and is ready for use.
//           </p>

//           <p style="background-color:#f4f6f7; padding:12px; border-radius:6px;">
//             💡 Prepare smart. Practice consistently. Stay confident.
//           </p>

//           <p>
//             We hope this helps you prepare effectively and succeed in your upcoming interviews.
//           </p>

//           <p>
//             If you have any questions or face any issues accessing the material, please 
//             <strong>reply to this email</strong>. Our support team will be happy to assist you.
//           </p>

//           <br>

//           <p>
//             Thank you for choosing <strong>TechCrack</strong>.
//           </p>

//           <p>
//             Best regards,<br>
//             <strong>TechCrack Team</strong>
//           </p>

//           <hr>

//           <p style="font-size: 12px; color: #888;">
//             This is an automated email sent after your purchase. Please keep this material for your personal use.
//           </p>
//         </div>
//       `,

//       attachments: [
//         {
//           filename: fileNameWithExt,
//           path: filePath,
//         },
//       ],
//     });

//     console.log("Mail sent successfully to:", to);

//   } catch (error) {
//     console.error("Mail sending error:", error);
//     throw new Error("Mail sending failed: " + error.message);
//   }
// };

// module.exports = sendMail;


// server/config/mail.js
const nodemailer = require("nodemailer");

/*
================================
CREATE TRANSPORTER
================================
*/
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
});

/*
================================
SEND PDF MAIL FUNCTION (PAYMENT)
================================
*/
const sendMail = async (to, filePath) => {
  try {
    if (!filePath) {
      throw new Error("filePath is required for sendMail");
    }

    const fileNameWithExt =
      filePath.split("/").pop() || filePath.split("\\").pop();

    await transporter.sendMail({
      from: `"TechCrack" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🚀 Your Interview Preparation Material is Ready!",
      text: `Hi,

Thank you for purchasing our interview preparation material.

Your material is attached.

Best regards,
TechCrack Team`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2E86C1;">
            🚀 Your Interview Preparation Material is Ready!
          </h2>
          <p>Hi there,</p>
          <p>Your material is attached to this email.</p>
          <p>Best regards,<br><strong>TechCrack Team</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: fileNameWithExt,
          path: filePath,
        },
      ],
    });

    console.log("PDF Mail sent successfully to:", to);
  } catch (error) {
    console.error("Mail sending error:", error);
    const code = error?.code ? ` code=${error.code};` : "";
    const responseCode = error?.responseCode
      ? ` responseCode=${error.responseCode};`
      : "";
    const response = error?.response ? ` response=${error.response};` : "";
    throw new Error(
      `Mail sending failed:${code}${responseCode}${response} message=${error.message}`
    );
  }
};

const verifyMailTransport = async () => {
  try {
    await transporter.verify();
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: {
        message: error?.message || "Unknown mail transport error",
        code: error?.code || null,
        responseCode: error?.responseCode || null,
      },
    };
  }
};

/*
================================
EXPORT BOTH
================================
*/
module.exports = {
  transporter,
  sendMail,
  verifyMailTransport,
};
