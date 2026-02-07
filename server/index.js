const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Health Check
app.get('/', (req, res) => {
  res.send('🚀 TechCrack Server is Live!');
});

// Routes - This defines the BASE path
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});