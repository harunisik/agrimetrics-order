# agrimetrics-order

#steps to create this full stack app (Node / React / Typescript / Docker)

frontend

- Create a simple react app that supports typescript
  npx create-react-app my-app --template typescript

- install bootstrap component library to have better look and feel
  npm install react-bootstrap bootstrap

backend

- Create simple node express app that supports typescript
  npm init --yes
  npm install express
  npm i -D typescript @types/express @types/node
  npx tsc --init
  npm install -D concurrently nodemon

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3003;

app.get('/', (req: Request, res: Response) => {
res.send('Express + TypeScript Server');
});

app.listen(port, () => {
console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
