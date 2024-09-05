// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env['PORT'] || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get('/products', (req, res) => {
  res.json([
    {id: '1', name: 'iPhone 11', price: 1000, src: 'products/iphone11.webp'},
    {id: '2', name: 'iPhone 12', price: 1200, src: 'products/iphone12.webp'},
    {id: '3', name: 'iPhone 13', price: 1300, src: 'products/iphone13.webp'}
  ]);
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

