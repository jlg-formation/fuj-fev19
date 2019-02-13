import * as express from 'express';
import * as serveIndex from 'serve-index';

import { timer } from 'rxjs';
import { map } from 'rxjs/operators';


const app = express();
const o = timer(1000).pipe(
  map(n => 'toto')
);
o.subscribe(str => console.log('coucou', str));

const www: string = 'www';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.use((req, res, next) => {
  console.log('url not found', req.url);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

