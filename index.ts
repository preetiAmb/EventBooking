import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

let events: Event[] = [
  { id: 1, title: 'Event 1', date: '2023-07-20', description: 'Description for Event 1' },
  { id: 2, title: 'Event 2', date: '2023-07-21', description: 'Description for Event 2' },
];

app.get('/api/events', (req: Request, res: Response) => {
  res.json(events);
});

app.post('/api/events', (req: Request, res: Response) => {
  const newEvent: Event = { ...req.body, id: Date.now() };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});