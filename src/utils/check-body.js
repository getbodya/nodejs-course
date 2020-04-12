const { every, has } = require('lodash');

const includesFields = (body, ...fields) => every(fields, field => has(body, field));

module.exports = {
  includesFields
};
