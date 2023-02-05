require('dotenv').config();

module.exports = {
  DB_URL: process.env.DB_URL,
  DOMAIN: process.env.DOMAIN,
  SECRET: process.env.SECRET,
};
