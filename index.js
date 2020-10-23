const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const corsMiddlewar = require("./middleware/cors");
require("dotenv").config();
var helmet = require("helmet");

//crear el servidor
const app = express();

const PORT = process.env.PORT || 5000;

//habilitar middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100kb", parameterLimit: "1000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.use("/", corsMiddlewar, (req, res) => {
  res.json("SERVIDOR MONTADO CORRECTAMENTE");
});

app.listen(PORT, () => {
  console.info("\n---- server listen on port: " + PORT + " ----");
  console.info("\x1b[36m%s\x1b[0m", "\nhttp://localhost:" + PORT + "\n");
});
