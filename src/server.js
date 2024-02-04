import { app } from './app.js';
import { config } from './util.js';

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
