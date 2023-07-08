import express from 'express';
import Instructor, { IInstructor } from '../model/instructor';

const router = express.Router();

// Get all instructors
router.get('/', async (req, res) => {
  try {
    const instructors: IInstructor[] = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    console.error('Error retrieving instructors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create an instructor
router.post('/', async (req, res) => {
  const { id, name, email } = req.body;

  try {
    const instructor: IInstructor = new Instructor({
      id,
      name,
      email,
    });

    const result: IInstructor = await instructor.save();
    res.json(result);
  } catch (error) {
    console.error('Error creating instructor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Update an instructor
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const instructor: IInstructor | null = await Instructor.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    res.json(instructor);
  } catch (error) {
    console.error('Error updating instructor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
