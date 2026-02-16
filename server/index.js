const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// 1. FORCE LOAD with Absolute Path
const envPath = path.join(__dirname, '.env');
const result = dotenv.config({ path: envPath });

const app = express();

// 2. Middleware
app.use(cors()); 
app.use(express.json()); 

// 3. Import Routes
const contactRoutes = require('./routes/contactRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// 4. Routes
app.get('/', (req, res) => {
  res.send('🚀 TechCrack Server is Live!');
});

app.use('/api/contact', contactRoutes);
app.use('/api/payment', paymentRoutes);

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📂 Searching for .env at: ${envPath}`);
  
  if (result.error) {
    console.error("❌ .env Load Error:", result.error.message);
  }

  // Debugging: If these are false, your keys aren't being read!
  console.log("-----------------------------------------");
  console.log("Razorpay Key ID present:    ", !!process.env.RAZORPAY_KEY_ID);
  console.log("Razorpay Secret present:    ", !!process.env.RAZORPAY_KEY_SECRET);
  console.log("-----------------------------------------");
});