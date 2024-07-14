import express from 'express';
import cors from 'cors';
import {defaultMiddleware} from '@nlbridge/express';


const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to NLUX + Node.js demo server!');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.post('/chat-api',
    defaultMiddleware('openai', {
        apiKey: '<YOUR_OPENAI_API_KEY>',
        chatModel: 'gpt-3.5-turbo',
    }),
);