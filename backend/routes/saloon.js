const express = require('express');
const router = express.Router();
const { User, Saloon, Appointment} = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');


//Signup
router.post('/signup', async (req, res) => {
    const { name, email, password, saloonName,services, prices, averageTimes, address} = req.body;
    const saloon = await Saloon.findOne({ email });
    if (saloon) {
      res.status(403).json({ message: 'Saloon already exists' });
    } else {
      const newSaloon = new Saloon({ name, email, password, saloonName,services, prices, averageTimes, address});
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
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid email or password' });
    }
  });

//Home page for saloon
router.get('/',authenticateJwt,async(req,res)=>{
    const saloon = req.user.saloon; 
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET , async (err,decode)=>{
        try {
            let saloon = await Saloon.find({saloon});
            res.status(200).json({
                message : "Success",
                data : saloon,
            })
        } catch (err) {
            res.json({message : err.message})
        }
    })
  });


  module.exports = router;