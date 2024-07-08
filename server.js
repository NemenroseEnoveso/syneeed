const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as needed

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:27017/syneed'; // MongoDB URI, consider using environment variables

app.use(express.json());
app.use('/users', userRoutes); // Mount your user routes

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('Could not connect to MongoDB:', err.message);
  process.exit(1); // Exit the process if MongoDB connection fails
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
