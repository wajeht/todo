import express from 'express';

import { todo } from './api/todo/todo.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/todos', todo);
app.use('/healthz', (req, res) => res.json({ message: 'ok' }));

app.use((req, res, next) => res.status(404).json({ message: 'Not found!' }));
app.use((err, req, res, next) => res.status(500).json({ message: err.message }));

export { app };
