import express, { Request, Response } from 'express';
import { getScheduleList } from '../services/scheduleService';

const router = express.Router();

router.get('/schedule', async (req: Request, res: Response) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const orders = getScheduleList();
  res.json(orders);
});

export { router };
