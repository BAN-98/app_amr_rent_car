const jwt = require("jsonwebtoken");
const JSONTOKEN = require("../config");

const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No token, auth denied" });

  jwt.verify(token, JSONTOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

module.exports = authRequired;
