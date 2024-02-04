export const logger = {
  info: (message) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message) => {
    console.error(`[ERROR] ${message}`);
  }
};

export const db = [
  {
    id: 1,
    text: 'eat'
  },
  {
    id: 2,
    text: 'sleep'
  }
];
