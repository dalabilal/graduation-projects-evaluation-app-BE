// quiz.router.ts
import express, { Request, Response } from 'express';
import Question, { IQuestion } from '../model/questions';

const router = express.Router();

// Get all questions
router.get('/', async (req: Request, res: Response) => {
  try {
    const questions: IQuestion[] = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a question
router.post('/', async (req: Request, res: Response) => {
  const { id, question, options, type, className, weight } = req.body;

  try {
    const newQuestion: IQuestion = new Question({
      id,
      question,
      options,
      type,
      className,
      weight,
    });

    const result: IQuestion = await newQuestion.save();
    res.json(result);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
