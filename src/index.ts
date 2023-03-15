import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createFileLogger } from './kernel';
import { v1Routes } from './routes/v1';
import { SUPPORTED_ENVIRONMENTS } from './kernel/constants/environments';
import { openAPIOptions } from './openapi.config';

const logger = createFileLogger('[index.ts]');

if (!Object.values(SUPPORTED_ENVIRONMENTS).includes(process.env.NODE_ENV)) {
  logger.error(`Unsupported environment:: ${process.env.NODE_ENV}`);
  process.exit(1);
}

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const app = express();
const specs = swaggerJSDoc(openAPIOptions);
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
if (process.env.NODE_ENV === SUPPORTED_ENVIRONMENTS.DEV) {
  app.use(
    '/api-docs',
    serve,
    setup(specs, { explorer: true })
  );
}

app.use('/api/v1', v1Routes);

app.get('/', (req, res) => {
  res.send('API backend services for Batch Processing Analytics');
});

app.listen(port, () => {
  logger.info(
    `Batch Processing Analytics application is running for environment ${process.env.NODE_ENV}, on port ${port}.`
  );
});
