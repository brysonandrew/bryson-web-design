import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dns from 'node:dns';
import { handleGenerateEmail } from './generate-email';

dns.setDefaultResultOrder('ipv4first');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  }),
);

app.post('/generate-email', handleGenerateEmail);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});