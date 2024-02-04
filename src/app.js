import express from 'express';

import { todo } from './todos/todo.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todo);

app.use((err, req, res, next) => {
  return res.status(404).json({
    message: 'Not found!'
  });
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: 'Error!',
    error: err
  });
});

export { app };
