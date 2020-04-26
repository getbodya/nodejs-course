const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const { loggerMiddleware, errorMiddleware, serverErrorMiddleware } = require('./utils/middlewares');
const { authMiddleware } = require('./resources/auth/auth.middleware');

const { logger } = require('./utils/logger');

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/boards.router');
const tasksRouter = require('./resources/tasks/task.router');
const authRouter = require('./resources/auth/auth.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(loggerMiddleware);

app.use('/login', authRouter);
app.use('/users', authMiddleware, userRouter);
app.use('/boards', authMiddleware, boardRouter, tasksRouter);

app.use(errorMiddleware);
app.use(serverErrorMiddleware);

process.on('unhandledRejection', reason => {
  logger.error(`Unhandled rejection detected: ${reason.message}`);
});

module.exports = app;
