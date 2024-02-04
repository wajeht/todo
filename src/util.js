export function logger() {
  return {
    info: (message) => {
      console.log(`[INFO] ${message}`);
    },
    error: (message) => {
      console.error(`[ERROR] ${message}`);
    }
  };
}

export const db = [];
