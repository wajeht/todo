import { todoService } from './todo.service';
import { describe, it, expect, beforeEach } from 'vitest';

let db;

const setupTodoService = () => {
  db = [];
  return todoService(db);
};

describe('todoService', () => {
  let service;

  beforeEach(() => {
    service = setupTodoService();
  });

  it('should create a todo successfully', () => {
    const newTodo = { id: '1', text: 'Test todo' };
    const result = service.createTodo(newTodo);
    expect(result.success).toBe(true);
    expect(db.length).toBe(1);
    expect(db[0]).toEqual(newTodo);
  });

  it('should update an existing todo successfully', () => {
    db.push({ id: '1', text: 'Initial todo' });
    const updatedTodo = { text: 'Updated todo' };
    const result = service.updateTodo('1', updatedTodo);

    expect(result.success).toBe(true);
    expect(db[0].text).toBe(updatedTodo.text);
  });

  it('should fail to update a non-existing todo', () => {
    const result = service.updateTodo('non-existing-id', { text: 'Should fail' });
    expect(result.success).toBe(false);
  });

  it('should fetch an existing todo', () => {
    const existingTodo = { id: '1', text: 'Fetch this todo' };
    db.push(existingTodo);
    const result = service.getTodo('1');

    expect(result.success).toBe(true);
    expect(result.todo).toEqual(existingTodo);
  });

  it('should fail to fetch a non-existing todo', () => {
    const result = service.getTodo('non-existing-id');
    expect(result.success).toBe(false);
  });

  it('should fetch all todos', () => {
    const todos = [
      { id: '1', text: 'First todo' },
      { id: '2', text: 'Second todo' }
    ];
    db.push(...todos);
    const result = service.getAllTodos();

    expect(result.success).toBe(true);
    expect(result.todos.length).toBe(2);
    expect(result.todos).toEqual(todos);
  });
});
