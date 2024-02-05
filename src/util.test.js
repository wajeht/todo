import { it, expect, vi } from 'vitest';
import { logger } from './util.js';

vi.spyOn(console, 'log').mockImplementation(() => {});
vi.spyOn(console, 'error').mockImplementation(() => {});

it('should log logger.info function', async () => {
  logger.info('info');
  expect(console.log).toHaveBeenCalledWith('[INFO] info');
});

it('should log logger.error function', async () => {
  logger.error('error');
  expect(console.error).toHaveBeenCalledWith('[ERROR] error');
});
