const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const corsMiddlewar = require("./middleware/cors");
const router = require("./routes/index");
require("dotenv").config();
var helmet = require("helmet");

//crear el servidor

function createServer() {
  const app = express();

  //habilitar middlewares
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(bodyParser.json({ limit: "100kb", parameterLimit: "1000" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(compression());

  app.use("/v1", corsMiddlewar, router);

  return app;
}

module.exports = createServer;
