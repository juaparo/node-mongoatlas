"use strict";
/**
 * Requiered dependencies
 */
const express = require("express");
const path = require("path");
const config = require("./config");
const routes = require("./src/Routes");
const morgan = require("morgan");
// Import database
const Database = require("./src/Database");

console.log(`NODE_ENV=${config.NODE_ENV}`);

//Express instance
const app = express();

//Static path
app.use(express.static(path.join(__dirname, "public")));

//Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

// Routing
app.use("/api", routes);

//DataBase
Database.connect();

//Models
// require("./src/Models/mdlTask");

//Init server
app.listen(config.PORT, config.HOST, () => {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});

module.exports = app;
