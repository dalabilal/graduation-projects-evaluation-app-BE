import express from 'express';
import Student, { IStudent } from '../model/model';

const router = express.Router();

// Get all students
router.get('/', async (req, res) => {
  try {
    const students: IStudent[] = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error retrieving students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a student
router.post('/', async (req, res) => {
  const { id, name, email, major } = req.body;

  try {
    const student: IStudent = new Student({
      id,
      name,
      email,
      major,
    });

    const result: IStudent = await student.save();
    res.json(result);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Update a student
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, major } = req.body;

  try {
    const student: IStudent | null = await Student.findByIdAndUpdate(
      id,
      { name, email, major },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
