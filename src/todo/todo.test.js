import request from 'supertest';
import { it, expect, vi, afterEach } from 'vitest';
import { app as server } from '../app.js';
import { db } from '../util.js';

const app = request(server);

vi.mock('../util.js', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn()
  },
  db: []
}));

afterEach(() => {
  vi.restoreAllMocks();
});

it('should be able to get all todos', async () => {
  db.push({
    id: 1,
    text: 'shower'
  });

  const response = await app.get('/api/v1/todos');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(1);
  expect(response.body).toStrictEqual([
    {
      id: 1,
      text: 'shower'
    }
  ]);
});

it('should be able to get a specific todo', async () => {
  db.push({
    id: '420',
    text: 'smoke'
  });

  const response = await app.get('/api/v1/todos/420');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(1);
  expect(response.body).toStrictEqual([
    {
      id: '420',
      text: 'smoke'
    }
  ]);
});
