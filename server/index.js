// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const dotenv = require("dotenv");

// /*
// =========================
// LOAD ENV FILE
// =========================
// */
// dotenv.config({
//   path: path.join(__dirname, ".env"),
// });

// const app = express();

// /*
// =========================
// MIDDLEWARE
// =========================
// */
// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// /*
// =========================
// SERVE PDFs SECURE DOWNLOAD
// =========================
// */
// app.use(
//   "/pdfs",
//   express.static(path.join(__dirname, "assets/pdfs"), {
//     setHeaders: (res, filePath) => {

//       // force download instead of open in browser
//       res.setHeader(
//         "Content-Disposition",
//         `attachment; filename="${path.basename(filePath)}"`
//       );

//       res.setHeader(
//         "Content-Type",
//         "application/pdf"
//       );
//     },
//   })
// );

// /*
// =========================
// ROUTES
// =========================
// */
// const paymentRoutes = require("./routes/paymentRoutes");

// app.use("/api/payment", paymentRoutes);

// /*
// =========================
// HEALTH CHECK ROUTE
// =========================
// */
// app.get("/", (req, res) => {
//   res.send("🚀 TechCrack Server Running");
// });

// /*
// =========================
// DEBUG ENV
// =========================
// */
// console.log("=================================");
// console.log("EMAIL_USER Loaded:", !!process.env.EMAIL_USER);
// console.log("EMAIL_PASS Loaded:", !!process.env.EMAIL_PASS);
// console.log("RAZORPAY_KEY_ID Loaded:", !!process.env.RAZORPAY_KEY_ID);
// console.log("RAZORPAY_SECRET Loaded:", !!process.env.RAZORPAY_KEY_SECRET);
// console.log("=================================");

// /*
// =========================
// START SERVER
// =========================
// */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

/*
=========================
LOAD ENV FILE
=========================
*/
dotenv.config({
  path: path.join(__dirname, ".env"),
});

const app = express();

/*
=========================
MIDDLEWARE
=========================
*/
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/*
=========================
SERVE PDFs SECURE DOWNLOAD
=========================
*/
app.use(
  "/pdfs",
  express.static(path.join(__dirname, "assets/pdfs"), {
    setHeaders: (res, filePath) => {

      // force download instead of open in browser
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${path.basename(filePath)}"`
      );

      res.setHeader(
        "Content-Type",
        "application/pdf"
      );
    },
  })
);

/*
=========================
ROUTES
=========================
*/
const paymentRoutes = require("./routes/paymentRoutes");
const contactRoutes = require("./routes/contactRoutes"); // ✅ ADDED THIS LINE

app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes); // ✅ ADDED THIS LINE

/*
=========================
HEALTH CHECK ROUTE
=========================
*/
app.get("/", (req, res) => {
  res.send("🚀 TechCrack Server Running");
});

/*
=========================
DEBUG ENV
=========================
*/
console.log("=================================");
console.log("EMAIL_USER Loaded:", !!process.env.EMAIL_USER);
console.log("EMAIL_PASS Loaded:", !!process.env.EMAIL_PASS);
console.log("RAZORPAY_KEY_ID Loaded:", !!process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_SECRET Loaded:", !!process.env.RAZORPAY_KEY_SECRET);
console.log("=================================");

/*
=========================
START SERVER
=========================
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
