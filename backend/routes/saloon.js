const express = require('express');
const router = express.Router();
const { User, Saloon, Appointment} = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');


//Signup
router.post('/signup', async (req, res) => {
    const { name, email, password, saloonName,imageAddress, services, prices, averageTimes, address, user} = req.body;
    const saloon = await Saloon.findOne({ email });
    if (saloon) {
      res.status(403).json({ message: 'Saloon already exists' });
    } else {
      const newSaloon = new Saloon({ name, email, password, saloonName,imageAddress, services, prices, averageTimes, address, user});
      await newSaloon.save();
      const token = jwt.sign({ email, role: 'saloon' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Saloon created successfully', token });
    }
  });


//Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const saloon = await Saloon.findOne({ email, password });
    if (saloon) {
      const token = jwt.sign({ saloon : saloon.email}, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token , saloon });
    } else {
      res.status(403).json({ message: 'Invalid email or password' });
    }
  });

//Home page for saloon
router.get('/',authenticateJwt,async(req,res)=>{
    const saloon = req.user.saloon;
    console.log(saloon);
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET , async (err,decode)=>{
        try {
            let data = await Saloon.find({email : saloon});
            console.log(data)
            res.status(200).json({
                message : "Success",
                data : data,
            })
        } catch (err) {
            res.json({message : err.message})
        }
    })
  });

// Delete a User
router.delete('/:userId', authenticateJwt, async (req, res) => {
  try {
    const userId = req.params.userId;

    // Remove this user from any saloons' user arrays
    await Saloon.updateMany(
      { user: userId },
      { $pull: { user: userId } }
    );

    res.json({ message: "User and their appointments completed and removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


  module.exports = router;