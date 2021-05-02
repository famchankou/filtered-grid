import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import { parseQueryParams, parseCookie } from './middlewares';
import { sequelize } from './db';
import { workouts } from './routes';

const app = express();
const apiVersion = 'v1';

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(parseQueryParams);
app.use(parseCookie);

// Routes
app.use(`/api/${apiVersion}/workouts`, workouts);

// Healthcheck endpoint
app.use('/healthcheck', (req, res, next) => {
  res.json({ status: 'UP' });
});

// Handle no route request
app.use((req, res, _) => {
  const err = new Error(`Page Not Found - ${JSON.stringify(req.parsedQuery.href)}`);
  res.status(404).send({ error: err.message });
});

const alterDatabaseOnSync = true;
const eraseDatabaseOnSync = false; // if enabled, drops all tables and data on sync
sequelize
  .sync({ force: eraseDatabaseOnSync, alter: alterDatabaseOnSync })
  .then(async () => {
    if (eraseDatabaseOnSync) {
      // erase tables data
    }

    app.listen(process.env.PORT, () =>
      console.log(`App listening on port ${process.env.PORT}`),
    );
  });
