const { logger } = require('./logger');
const { finished } = require('stream');
const { ValidationError } = require('./validation-error');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');

const loggerMiddleware = (req, res, next) => {
  next();
  finished(res, () => {
    const { method, originalUrl, query, body } = req;
    const { statusCode } = res;
    logger.info(`${method} ${statusCode} ${originalUrl} ${JSON.stringify(query)} ${JSON.stringify(body)}`);
  });
};

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const { method, originalUrl, query, body } = req;
    logger.error(`${method} ${err.status} ${originalUrl} ${JSON.stringify(query)} ${JSON.stringify(body)}`);
    res.status(err.status).send(err.text);
    return;
  }
  next(err);
};

const serverErrorMiddleware = (err, req, res) => {
  const { method, originalUrl, query, body } = req;
  logger.error(`${method} ${err.status} ${originalUrl} ${JSON.stringify(query)} ${JSON.stringify(body)}`);
  res.status(INTERNAL_SERVER_ERROR).send(getStatusText(INTERNAL_SERVER_ERROR));
};

module.exports = {
  loggerMiddleware,
  errorMiddleware,
  serverErrorMiddleware
};
