import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as ejs from 'ejs';
import * as fs from 'fs';
import { promises as fsp } from 'fs';
import * as path from 'path';

import { dir } from './dir';

const context = {
  titi: 'coucou',
  power2: x => x * x,
};

const app = express();

app.set('view engine', 'ejs');
app.set('views', './tmpl');

app.use('/dir', dir);

const www: string = 'www';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.use(async (req, res, next) => {
  const filename = path.resolve(__dirname, './tmpl/' + req.url + '.ejs');
  console.log('filename', filename);
  try {
    await fsp.access(filename);
    res.render(filename, context);
  } catch (err) {
    next();
  }
});

app.use((req, res, next) => {
  console.log('url not found', req.url);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

