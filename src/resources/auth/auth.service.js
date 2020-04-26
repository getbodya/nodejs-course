const bcrypt = require('bcrypt');

const checkPassword = async (hashedPassword, password) => await bcrypt.compare(password, hashedPassword);

module.exports = {
  checkPassword
};
