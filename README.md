# agrimetrics-order
<img width="813" alt="Screenshot 2022-10-27 at 08 03 02" src="https://user-images.githubusercontent.com/5821127/198214022-11cfcf49-fde3-4b29-b9d3-fd0336f45bc0.png">

# How to run

**backend**

```bash
cd agrimetrics-order/backend
npm run dev
```

This will listen at 3003 port

**frontend**

```bash
cd agrimetrics-order/frontend
npm start
```

Go to http://localhost:3000/

# How to run test

```bash
cd agrimetrics-order/backend
npm test
```

- Test results;

<img width="821" alt="Screenshot 2022-10-26 at 15 51 55" src="https://user-images.githubusercontent.com/5821127/198069653-8aaf8ca6-41bc-41be-9ec1-381ac69c77b4.png">
<img width="879" alt="Screenshot 2022-10-26 at 15 52 34" src="https://user-images.githubusercontent.com/5821127/198069705-c7c7f0b2-a158-4a71-aff2-e5f981144aef.png">
<img width="1286" alt="Screenshot 2022-10-26 at 16 01 28" src="https://user-images.githubusercontent.com/5821127/198069805-6d0b9994-c145-42e9-a0d8-905b23c46e61.png">
<img width="1272" alt="Screenshot 2022-10-26 at 16 01 11" src="https://user-images.githubusercontent.com/5821127/198069819-869a0106-4e2d-486f-85cc-bf43e5844eae.png">

# steps to create this full stack app (Node / React / Typescript)

## frontend

- Create a simple react app that supports typescript

  ```bash
  npx create-react-app my-app --template typescript
  ```

- install bootstrap component library to have better look and feel

  ```bash
  npm install react-bootstrap bootstrap
  ```

- dependencies

  - axios
  - bootstrap
  - react-query
  - typescript

## backend

- Create simple node express app that supports typescript

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
