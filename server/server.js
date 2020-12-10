import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
// import csrf from 'csurf';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import connectDatabase from './config/db.js';

import category from './routes/category.js';
import user from './routes/user.js';
import article from './routes/article.js';
import authorization from './routes/authorization.js';
import author from './routes/author.js';
import reference from './routes/reference.js';
import image from './routes/image.js';

const __dirname = path.resolve();

const app = express();

app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.use(limiter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));

/* app.use(csrf({ cookie: true }));

app.get(`${process.env.BASEURL}/csrf-token`, (req, res) => {
  res.setHeader('X-CSRF-TOKEN', req.csrfToken());
  res.status(200).json({ data: req.csrfToken() });
}); */

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  }),
);

app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/`, authorization);
app.use(`${process.env.BASEURL}/authors`, author);
app.use(`${process.env.BASEURL}/references`, reference);
app.use(`${process.env.BASEURL}/`, image);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
