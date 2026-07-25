const jwt = require("jsonwebtoken");
const jwtPassword = "secret_key";

/**
 * Generates a "Short-Lived" JWT that expires in 1 minute.
 * * @param {string} username - The user's email.
 * @returns {string} A JWT that will be invalid after 60 seconds.
 */
function signShortLivedToken(username) {
  // Your code here
  return jwt.sign({ username }, jwtPassword, { expiresIn: 60 });
}

/**
 * Checks if a token is still valid or has expired.
 * * @param {string} token - The JWT string.
 * @returns {string} Returns "valid", "expired", or "invalid".
 */
function checkTokenStatus(token) {
  // Your code here
  return jwt.verify(token, jwtPassword, (err, decoded) => {
    if ({ ...err }["name"] === "TokenExpiredError") return "expired";
    if (err || decoded === undefined) return "invalid";
    return "valid";
  });
}

module.exports = {
  signShortLivedToken,
  checkTokenStatus,
  jwtPassword,
};
