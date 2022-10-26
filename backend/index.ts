import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as getSchedule } from './routes/getSchedule';
import { router as createOrder } from './routes/createOrder';

const app: Express = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', getSchedule);
app.use('/', createOrder);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
