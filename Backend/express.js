import express from 'express';
import cors from 'cors';
import {defaultMiddleware} from '@nlbridge/express';
import * as dotenv from 'dotenv'; // Use ES module syntax for dotenv
// Existing setup and middleware
dotenv.config();
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Existing routes
app.get('/', (req, res) => {
    res.send('Welcome to NLUX + Node.js demo server!');
});

// Existing server listen call
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Existing API key setup (consider removing the hardcoded API key)
const apiKey = process.env.API_KEY;
app.post('/chat-api',
    defaultMiddleware('openai', {
    apiKey: "",
    chatModel: 'gpt-3.5-turbo',
    }),
);