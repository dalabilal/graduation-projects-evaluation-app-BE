import { Router, Request, Response } from 'express';
import User from '../model/user';
import mongoose from 'mongoose';

const router = Router();


router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    if (user) {
      return res.status(200).json({ message: 'User authenticated successfully' });
    } else {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


export default router;
