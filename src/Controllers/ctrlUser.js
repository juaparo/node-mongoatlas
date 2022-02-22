"use strict";
/**
 * Required dependencies
 */

const userSchema = require("../Models/mdlUser");
const ctrlUser = {};

ctrlUser.createUser = async (req, res) => {
  const user = userSchema(req.body);
    console.log(user);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = ctrlUser;
