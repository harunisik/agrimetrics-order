# agrimetrics-order

<img width="813" alt="Screenshot 2022-10-27 at 08 03 02" src="https://user-images.githubusercontent.com/5821127/198214022-11cfcf49-fde3-4b29-b9d3-fd0336f45bc0.png">

## Fast Food Scenario

Giovanni, who runs the Agrimetrics Italian Caffè, offers a handmade sandwich service. For a month’s worth of free coffees (so the stakes are high!), Giovanni has asked us to create an app for him that organises his sandwich orders and sequences what he should be doing. We would like you to help us make this app.
We take an agile approach to software development, and this project is no exception. The first version of the app will be very simple but will provide us with a starting point to discuss with Giovanni what else he needs. From our initial conversations, we have identified that the first two pieces of functionality should be to accept sandwich orders from customers, and to provide a list of current tasks to Giovanni.
We would like you to provide some code for managing the sandwich schedule. You can choose how to meet the requirement, and examples of what you could create include:
• A library that can be called from a backend application;
• A RESTful API that accepts and lists sandwich orders.

## Requirements

Giovanni has sent us some notes in an email: “Each handmade sandwich takes me 2½ minutes to make. It then takes me 1 minute to serve the sandwich and take payment. I take a break when there aren’t any orders to make or serve.”  
The schedule must contain the sequence number, time, task, and recipient. For example, if Giovanni has three sandwich orders to prepare, the schedule should include information along these lines:

1. 00:00 Make sandwich #1 for Stavros
2. 02:30 Serve sandwich #1 for Stavros
3. 03:30 Make sandwich #2 for Anisa
4. 06:00 Serve sandwich #2 for Anisa
5. 07:00 Make sandwich #3 for Adeel
6. 09:30 Serve sandwich #3 for Adeel
7. 10:30 Take a break.

# How to run

**backend**

```bash
cd agrimetrics-order/backend
npm install
npm run dev
```

This will listen at 3003 port

**frontend**

```bash
cd agrimetrics-order/frontend
npm install
npm start
```

Go to http://localhost:3000/

# How to run test

```bash
cd agrimetrics-order/backend
npm test
```

- Test results;
<img width="659" alt="Screenshot 2022-10-27 at 08 14 07" src="https://user-images.githubusercontent.com/5821127/198216646-09a77ace-38b1-4361-b31b-79b9331e961a.png">
<img width="821" alt="Screenshot 2022-10-26 at 15 51 55" src="https://user-images.githubusercontent.com/5821127/198069653-8aaf8ca6-41bc-41be-9ec1-381ac69c77b4.png">
<img width="879" alt="Screenshot 2022-10-26 at 15 52 34" src="https://user-images.githubusercontent.com/5821127/198069705-c7c7f0b2-a158-4a71-aff2-e5f981144aef.png">
<img width="1286" alt="Screenshot 2022-10-26 at 16 01 28" src="https://user-images.githubusercontent.com/5821127/198069805-6d0b9994-c145-42e9-a0d8-905b23c46e61.png">
<img width="1272" alt="Screenshot 2022-10-26 at 16 01 11" src="https://user-images.githubusercontent.com/5821127/198069819-869a0106-4e2d-486f-85cc-bf43e5844eae.png">

# steps to create this full stack app (Node / React / Typescript)

## frontend

- Create a simple react app with typescript

  ```bash
  npx create-react-app my-app --template typescript
  ```

- dependencies

  - axios
  - bootstrap
  - react-bootstrap
  - react-query
  - typescript

## backend

- Create simple node express app with typescript

  ```bash
  npm init --yes
  npm install express
  npm i -D typescript @types/express @types/node
  npx tsc --init
  npm install -D concurrently nodemon
  ```

- Sample code

  ```
  import express, { Express, Request, Response } from 'express';

  const app: Express = express();
  const port = process.env.PORT || 3003;

  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
  ```

- dependencies

  - express
  - cors
  - moment
  - typescript

## API list

- POST /createOrder - creates a new order
- GET /schedule - list all available schedule items
