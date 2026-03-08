const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const { verifyMailTransport } = require("./config/mail");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked for origin: " + origin));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/pdfs",
  express.static(path.join(__dirname, "assets/pdfs"), {
    setHeaders: (res, filePath) => {
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${path.basename(filePath)}"`
      );
      res.setHeader("Content-Type", "application/pdf");
    },
  })
);

const paymentRoutes = require("./routes/paymentRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (_req, res) => {
  res.status(200).send("TechCrack API is running");
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/health/mail", async (_req, res) => {
  const hasMailEnv =
    Boolean(process.env.EMAIL_USER) &&
    Boolean(process.env.EMAIL_PASS) &&
    Boolean(process.env.RECEIVER_EMAIL);

  if (!hasMailEnv) {
    return res.status(500).json({
      status: "error",
      message: "Mail environment variables are missing",
    });
  }

  const result = await verifyMailTransport();
  if (!result.ok) {
    return res.status(502).json({
      status: "error",
      message: "Mail transport verification failed",
      details: result.error,
    });
  }

  return res.status(200).json({
    status: "ok",
    message: "Mail transport is ready",
  });
});

app.listen(PORT, () => {
  console.log(`[server] running on port ${PORT}`);
});
