import express from 'express';

import { todo } from './todos/todo.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todo);

app.use((req, res, next) => res.status(404).json({ message: 'Not found!' }));
app.use((err, req, res, next) => res.status(500).json({ message: err.message }));

export { app };
