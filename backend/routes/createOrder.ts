import express, { Request, Response } from 'express';
import { getOrderLength, saveOrder } from '../services/orderService';

const router = express.Router();
const names = ['Stavros', 'Anisa', 'Adeel', 'Olly', 'Steve', 'Katie', 'Zoe'];

const getRandomName = (): string => {
  return names[Math.floor(Math.random() * names.length)];
};

router.post('/createOrder', (req: Request, res: Response) => {
  const length = getOrderLength();
  const newOrder = { id: length + 1, recipient: getRandomName() };
  saveOrder(newOrder);
  res.json(newOrder);
});

export { router };
