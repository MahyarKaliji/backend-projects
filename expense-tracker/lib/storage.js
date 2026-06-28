import fs from "node:fs";

const FILE_PATH = "./expenses.json";

// Create a json file if it doesn't exist
if (
  !fs.existsSync(FILE_PATH) ||
  fs.readFileSync("./expenses.json", "utf-8").trim().length === 0
) {
  fs.writeFileSync(FILE_PATH, "[]");
}

// Reading the expenses file
export function loadExpenses() {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

// Save the expenses file as json
export function saveExpenses(expenses) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(expenses, null, 2));
}

export function saveCSV(expenses) {
  fs.writeFileSync("./expenses.csv", expenses);
}
