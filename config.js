"use strict";

module.exports = {
  PORT: process.env.PORT || 8085, // as of Jun 2019 port 8080 404 nginx on my local machine, best solution is to change the server port to 8085
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3050",
  DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost/backend",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL || "mongodb://localhost/backend-test"
};
