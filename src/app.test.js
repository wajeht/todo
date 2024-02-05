import request from 'supertest';
import { it, expect } from 'vitest';
import { app as server } from './app.js';

const app = request(server);

it('should be able to ping healthz end pint', async () => {
  const response = await app.get('/healthz');
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({ message: 'ok' });
});
