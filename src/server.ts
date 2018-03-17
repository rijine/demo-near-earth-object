import express from 'express';
import compression from 'compression';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

// custom
import { Log } from './services/logger';
import { DbConnection } from './services/db.connection';
import appRouteConfig from './routes';

const db = new DbConnection();
db.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(compression());


// binding routes to the express app
appRouteConfig(app);

const port: number | string = process.env.PORT || 3000;
app.listen(port, () => Log.info('listening to port 3000'));

export default app;