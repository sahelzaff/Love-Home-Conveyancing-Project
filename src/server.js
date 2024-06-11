import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://sahelzaffar2:o6z6OG2JlRyFPEaC@lovehomedata.4web7xq.mongodb.net/?retryWrites=true&w=majority&appName=LoveHomeData', 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  message: String
});

// Define a model
const Contact = mongoose.model('Contact', contactSchema);

// Define the POST route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const contact = new Contact({
    firstName,
    lastName,
    phone,
    email,
    message
  });

  try {
    await contact.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    console.error('Error saving form data:', error);  // Log the error
    res.status(500).send('Error saving form data');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
