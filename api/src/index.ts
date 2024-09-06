// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const bodyParser = require('body-parser');
import { generateToken } from'./jwt-utils/jwt.js';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env['PORT'] || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Middleware for JWT Token Validation
const jwt = require('jsonwebtoken');
const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>

    jwt.verify(token, 'yourSecretKey', (err, payload) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid token',
        });
      } else {
        req.user = payload;
        next();
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Token is not provided',
    });
  }
};

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


// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = {
    id: 1,
    username: 'admin',
    password: 'nimda',
  };

  // Check if username and password match
  if (username === user.username && password === user.password) {
    // Generate JWT token
    const token = generateToken(user);

    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password',
    });
  }
});

// Protected Route
app.get('/protected', validateToken, (req: any, res) => {
  res.json({
    success: true,
    message: 'Welcome to the protected route!',
    user: req.user,
  });
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

