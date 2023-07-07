
import express, { Request, Response } from 'express';
import StudentsName, { IName } from '../model/students-name';

const router = express.Router();

router.post('/', async (req : Request, res : Response) => {
    const {  Myname } = req.body;
  
    try {
      const storeStudent: IName = new StudentsName({
        Myname,
      });
  
      const result: IName = await storeStudent.save();
      res.json(result);
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Internal server error name' });
    }
  });

export default router;
