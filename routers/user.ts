// users.js

import User from "../model/user";

const express = require('express');
const router = express.Router();

router.get('/', async (req:any, res:any) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  });

// Define the route for creating a new user
router.post('/', async (req:any, res:any) => {
  try {
    const { id, name, email } = req.body;
    const user = new User({ id, name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

export default router;
