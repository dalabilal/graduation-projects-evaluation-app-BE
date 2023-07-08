import StudentsData from "../model/student-data";
import express, { Request, Response } from 'express';

const router = express.Router();


// Create a new student data
router.post('/', async (req, res) => {
  try {
    const { group, studentName, value } = req.body;
    const studentData = new StudentsData({ group, studentName, value });
    await studentData.save();
    res.status(201).json(studentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create student data' });
  }
});

// Get all student data
router.get('/', async (req, res) => {
  try {
    const studentData = await StudentsData.find();
    res.json(studentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch student data' });
  }
});

export default router;