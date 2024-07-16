const express = require('express');
const router = express.Router();
const { User, Saloon, Appointment} = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');

//Signup
router.post('/signup', async (req, res) => {
    const { name, email, password, phone, gender} = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ name, email, password, phone, gender});
      await newUser.save();
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });

  //Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ user : user.email}, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid email or password' });
    }
  });

 //Get all saloons
 router.get('/', authenticateJwt, async (req, res) => {
  const saloon = await Saloon.find({});
  res.json({ saloon });
});

  //Get saloon by id
  router.get('/:saloonId' , authenticateJwt , async (req,res)=>{
    try {
        let data = await Saloon.findById(req.params.saloonId);
        res.json({data : data});
    } catch (error) {
        res.json({message : error.message})
    }
})

  //Post appointment
  router.post('/:saloonId/appointment', authenticateJwt, async (req, res) => {
    const { services } = req.body;
    const saloon = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        user.purchasedCourses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });




  module.exports = router;