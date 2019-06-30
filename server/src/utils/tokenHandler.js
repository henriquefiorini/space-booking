const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function generate(args) {
  const token = jwt.sign(args, JWT_SECRET);
  return token;
}

function decode(token) {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
}

module.exports = {
  generate,
  decode,
};
