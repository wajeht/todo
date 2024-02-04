import express from 'express';
const todo = express.Router();

import { todoService } from './todo.service.js';
import { logger, db } from '../util.js';
import {
  updateTodoHandler,
  getTodoHandler,
  getAllTodosHandler,
  createTodoHandler
} from './todo.handler.js';

todo.patch('/:todoId', updateTodoHandler(logger, todoService(db)));
todo.post('/', createTodoHandler(logger, todoService(db)));
todo.get('/:todoId', getTodoHandler(logger, todoService(db)));
todo.get('/', getAllTodosHandler(logger, todoService(db)));

export { todo };
