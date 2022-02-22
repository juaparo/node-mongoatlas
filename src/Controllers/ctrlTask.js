"use strict";
/**
 * Requried dependencies
 */
const taskSchema = require("../Models/mdlTask");
const crtlTask = {};

crtlTask.createTask = async (req, res) => {
  const task = new taskSchema(req.body);

  try {
    const taskSaved = await task.save();

    if (!taskSaved) {
      return res.send({
        success: false,
        taskSaved,
      });
    }

    return res.send({
      success: true,
      taskSaved,
    });
  } catch (error) {
    return res.send({
      success: false,
      error: error,
    });
  }
};

module.exports = crtlTask;
