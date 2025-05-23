const express = require("express");
const router = express.Router();

// Exercise 1: Building your routes
// Create for:
// - createNewTask
// - getDoneTasks
// - getToDoTasks
// - updateTaskStatus
// - findTasksByTitle

const {
  getAllTasks,
  createNewTask,
  getDoneTasks,
  getToDoTasks,
  updateTaskStatus,
  findTasksByTitle
} = require("../controllers/taskController");

// TODO: Define routes for:
// - POST new task
// - GET done tasks
// - GET to-do tasks
// - PUT update task status by ID to opposite state
// - POST search tasks by title
// router.get(...);
// router.post(...);
// ...
// Completed example
router.get("/", getAllTasks);
router.post("/createNewTask", createNewTask);
router.get("/getDoneTasks", getDoneTasks);
router.get("/getToDoTasks", getToDoTasks);
router.put("/updateTaskStatus", updateTaskStatus);
router.post("/findTasksByTitle", findTasksByTitle);

module.exports = router;