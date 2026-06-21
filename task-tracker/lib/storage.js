const fs = require("fs");
const FILE_PATH = "./tasks.json";


// Create the JSON file if it does not exist
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, "[]");
}

// Tasks reading function
function loadTasks() {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

// Tasks save function
function saveTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

module.exports = {
  loadTasks,
  saveTasks,
};
