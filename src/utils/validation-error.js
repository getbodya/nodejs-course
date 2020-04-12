const { getStatusText } = require('http-status-codes');

class ValidationError extends Error {
  constructor(status) {
    super();
    this.status = status;
    this.text = getStatusText(this.status);
  }
}

module.exports = {
  ValidationError
};
