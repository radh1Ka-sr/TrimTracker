const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

const userRouter = require('./routes/user');
const shopRouter = require('./routes/saloon'); // Ensure the correct path is used

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/saloon', shopRouter);

// Connect to MongoDB
const uri = 'mongodb+srv://pratiknand5:Uy3KiRbVFaA4uMCj@cluster0.eehxhmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Connection error', err);
  });

app.listen(3000, () => console.log('Server running on port 3000'));
//hi this is my server