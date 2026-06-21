#!/usr/bin/env node
const {
  addTask,
  deleteTask,
  listTasks,
  markDone,
  markInProgress,
  updateTask,
} = require("./lib/taskManager");


const command = process.argv[2];

// Command handling
switch (command) {
  case "add":
    const description = process.argv[3];
    addTask(description);
    break;

  case "list":
    const statusFilter = process.argv[3];
    listTasks(statusFilter);
    break;

  case "update":
    const updatedID = parseInt(process.argv[3]);
    const newDescription = process.argv[4];
    updateTask(updatedID, newDescription);
    break;

  case "delete":
    const deletedID = parseInt(process.argv[3]);
    deleteTask(deletedID);
    break;

  case "mark-in-progress":
    const inProgressID = parseInt(process.argv[3]);
    markInProgress(inProgressID);
    break;

  case "mark-done":
    const doneID = parseInt(process.argv[3]);
    markDone(doneID);
    break;

  default:
    console.log("Unknown command!");
}
