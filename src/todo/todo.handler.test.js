import { describe, it, expect } from 'vitest';
import { updateTodoHandler } from './todo.handler.js';

const logger = {
  info: () => {},
  error: () => {}
};

const todoService = {
  updateTodo: (todoId, updatedData) => {
    if (todoId === 'expected-id') {
      return { success: true };
    }
    return { success: false };
  }
};

describe('updateTodoHandler', () => {
  it('should respond with success message on successful update', () => {
    const req = {
      params: { todoId: 'expected-id' },
      body: { name: 'Updated Todo', completed: true }
    };

    let resSendCalledWith = '';

    const res = {
      send: (message) => { resSendCalledWith = message; },
      status: function(statusCode) { this.statusCode = statusCode; return this; }
    };

    const handler = updateTodoHandler(logger, todoService);

    handler(req, res);

    expect(resSendCalledWith).toBe('Todo updated');
  });

  it('should respond with error message on failed update', () => {
    const req = {
      params: { todoId: 'unexpected-id' },
      body: { name: 'Failed Todo', completed: false }
    };

    const res = {
      send: () => {},
      status: function(statusCode) { this.statusCode = statusCode; return this; }
    };

    const handler = updateTodoHandler(logger, todoService)

    handler(req, res);

    expect(res.statusCode).toBe(500);
  });
});
