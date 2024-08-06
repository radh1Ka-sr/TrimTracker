const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/user');
const shopRouter = require('./routes/saloon'); // Ensure the correct path is used

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/saloon', shopRouter);

// Connect to MongoDB

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};


connectToMongoDB();

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
//hi this is my server