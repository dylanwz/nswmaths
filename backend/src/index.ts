import express from 'express';

import { errorHandler } from './middleware/error';

import { questionRouter } from './routes/question';

const app = express();

app.use(errorHandler);

app.get('/', (req, res, next) => {
    console.log("Hello World!")
});

app.listen(3000, () => {
    console.log(`✨ Server started on port 8080! ✨`);
  });