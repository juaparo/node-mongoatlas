"use strict";
/**
 * Required dependencies
 */
const mongoose = require("mongoose");
// Enviroment config
const config = require("../../config");

// Database instatance
const Database = {};

Database.connect =  async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  try {
    await  mongoose.connect(config.MONGO_URI, options, () => console.log("Mongodb is connected..."));
  } catch (error) {
    console.error(error);
  }
};

module.exports = Database;
