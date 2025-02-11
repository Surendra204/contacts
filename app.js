
const express = require('express');
const connectDB = require('./db'); 
const contactRoutes = require('./routes/contactRoutes'); // API routes

const app = express()
connectDB();

app.use(express.json());


app.use('/api', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
