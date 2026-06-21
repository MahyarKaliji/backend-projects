const { loadTasks, saveTasks } = require("./storage");

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

// Function to set a new task ID
function setTaskId(tasks) {
  if (tasks.length === 0) return 1;
  return Math.max(...tasks.map((task) => task.id)) + 1;
}

// Function add a new task
function addTask(description) {
  const tasks = loadTasks();

  if (!description) {
    console.log(
      `⚠️ ${colors.yellow} Please enter a task description!${colors.reset}`,
    );
    return;
  }

  const newTask = {
    id: setTaskId(tasks),
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(newTask);

  saveTasks(tasks);

  console.log(
    `✅${colors.green} Task added successfully (ID: ${newTask.id})${colors.reset}`,
  );
}

// Function list tasks with optional status filter
function listTasks(status) {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log(`ℹ️ ${colors.blue} No tasks found!${colors.reset}`);
    return;
  }

  let filteredTasks = tasks;

  if (status) {
    const normalizedFilter = status.toLowerCase().trim();

    if (
      normalizedFilter !== "todo" &&
      normalizedFilter !== "in-progress" &&
      normalizedFilter !== "done"
    ) {
      console.log(
        `❌${colors.red}Error: Invalid status filter "${status}". Use "todo", "in-progress", or "done"!${colors.reset}`,
      );
      return;
    }

    filteredTasks = tasks.filter((task) => task.status === normalizedFilter);

    if (filteredTasks.length === 0) {
      console.log(
        `ℹ️ ${colors.blue} No tasks found with status "${status}"!${colors.reset}`,
      );
      return;
    }
  }

  console.table(filteredTasks);
}

// Function update a task's description by ID
function updateTask(id, newDescription) {
  const tasks = loadTasks();

  if (isNaN(id)) {
    console.log(
      `⚠️ ${colors.yellow} Please enter task's ID as a number.${colors.reset}`,
    );
    return;
  }
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log(
      `⚠️ ${colors.yellow} Task with ID "${id}" not found.${colors.reset}`,
    );
    return;
  }

  task.description = newDescription;
  task.updatedAt = new Date();

  saveTasks(tasks);

  console.log(
    `✅${colors.green} Task updated successfully (ID: ${id})${colors.reset}`,
  );
}

// Function delete a task by ID
function deleteTask(id) {
  const tasks = loadTasks();

  if (!id || isNaN(id)) {
    console.log(
      `⚠️ ${colors.yellow} Please enter a valid task ID.${colors.reset}`,
    );
    return;
  }

  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    console.log(
      `ℹ️ ${colors.blue} Task with ID "${id}" not found.${colors.reset}`,
    );
    return;
  }
  tasks.splice(taskIndex, 1);
  saveTasks(tasks);
  console.log(`✅${colors.green} Task deleted successfully.${colors.reset}`);
}

// Function mark a task as in-progress by ID
function markInProgress(id) {
  const tasks = loadTasks();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    console.log(`ℹ️ ${colors.blue} Task with ID "${id}" not found.${colors.reset}`);
    return;
  }

  task.status = "in-progress";
  task.updatedAt = new Date();

  saveTasks(tasks);

  console.log(`✅${colors.green} Task marked as in-progress (ID: ${id})${colors.reset}`);
}

// Function mark a task as done by ID
function markDone(id) {
  const tasks = loadTasks();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    console.log(`ℹ️ ${colors.blue} Task with ID "${id}" not found.${colors.reset}`);
    return;
  }

  task.status = "done";
  task.updatedAt = new Date();

  saveTasks(tasks);

  console.log(`✅${colors.green} Task marked as done (ID: ${id})${colors.reset}`);
}

module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
  markInProgress,
};
