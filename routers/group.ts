import express, { Request, Response } from 'express';
import Groups, { IGroups } from '../model/group';

const router = express.Router();

// Create a group
router.post('/', async (req: Request, res: Response) => {
  try {
    const { id, groupName, students, instructor ,type } = req.body;
    console.log(req.body);
    
    const group: IGroups = await Groups.create({ id, groupName, students : students, instructor , type });
    group.save()
  .then(savedGroup => {
    console.log('Group created:', savedGroup);
  })
  .catch(error => {
    console.error('Error creating group:', error);
  });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const groups: IGroups[] = await Groups.find();
    res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
