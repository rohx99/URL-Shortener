const jwt = require("jsonwebtoken");

const secret = "Rohit";

function createTokenForUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
    profilePicture: user.profilePicture,
  };
  const token = jwt.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

module.exports = { createTokenForUser, validateToken };
