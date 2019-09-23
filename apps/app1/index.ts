import * as express from 'express';
import content from '@libs/lib1';

const app = express();

app.get('/*', (_, res) => res.send(`Hello !! \n this is ${content}`));

app.listen(3000, () => console.log('app1 started on 3000'));
