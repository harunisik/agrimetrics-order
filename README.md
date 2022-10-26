# agrimetrics-order

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
