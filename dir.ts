import * as express from 'express';

const app = express.Router();

app.use((req, res, next) => {
  console.log('we are in dir...');
  next();
});

app.get('/date', (req, res, next) => {
  res.set('X-Toto-De-Torcy', 'coucou');
  res.json({
    date: new Date()
  });
});

export const dir = app;
