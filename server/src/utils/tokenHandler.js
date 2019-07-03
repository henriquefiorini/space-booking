const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function sign(args) {
  const token = jwt.sign(args, JWT_SECRET);
  return token;
}

function verify(token) {
  if (!token) return null;
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
}

module.exports = {
  sign,
  verify,
};
