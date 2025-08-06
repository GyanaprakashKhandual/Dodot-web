const express = require('express');
const connectDB = require('./configs/DB');
const dotenv = require('dotenv');

dotenv.config();

// Connect to database
connectDB();
console.log('✅ MongoDB connected successfully');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route
app.get('/', (req, res) => {
    res.send('✅ API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
