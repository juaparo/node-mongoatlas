'use strict';
/**
 * Required dependencies
 */
const mongoose = require("mongoose");

const taskSchema =  mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("Task", taskSchema);