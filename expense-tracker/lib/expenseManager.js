import { Parser } from "json2csv";
import colors from "../../constants/colors.js";
import { error, info, success, warning } from "../../constants/icons.js";
import { loadExpenses, saveCSV, saveExpenses } from "./storage.js";

const { red, reset, blue, green, yellow } = colors;

// Function to set a new ID
function setId(expenses) {
  if (expenses.length === 0) return 1;
  return Math.max(...expenses.map((expense) => expense.id)) + 1;
}

// Function to add a new expense
export function addExpense({ description, amount }) {
  const expenses = loadExpenses();

  // Checking data exist
  if (!description?.trim() || !amount?.trim()) {
    if (!description?.trim()) {
      console.log(`${error}${red}Please entre description!${reset}`);

      return;
    } else if (!amount?.trim()) {
      console.log(`${error}${red}Please entre amount!${reset}`);

      return;
    } else {
      console.log(`${error}${red}Please entre correct data${reset}`);

      return;
    }
  }

  const newExpense = {
    id: setId(expenses),
    description,
    amount: Number(amount),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  expenses.push(newExpense);
  saveExpenses(expenses);

  console.log(`${success}${green}Expense added successfully (ID: ${newExpense.id})
${reset}`);
}

// Function list expenses
export function listExpenses() {
  const expenses = loadExpenses();

  if (expenses.length === 0) {
    console.log(`${info}${blue}No expenses found!${reset}`);
    return;
  }

  console.table(expenses);
}

// Function to update an expense
export function updateExpense(data) {
  const expenses = loadExpenses();

  if (isNaN(data.id)) {
    console.log(
      `${warning}${yellow}Please enter expense's ID as a number.${reset}`,
    );
    return;
  }

  if (isNaN(data.amount)) {
    console.log(
      `${warning}${yellow}Please enter expense's amount as a number.${reset}`,
    );
    return;
  } else if (Number(data.amount) <= 0) {
    console.log(
      `${warning}${yellow}Expense's amount must be greater than 0.${reset}`,
    );
    return;
  }

  const expense = expenses.find((item) => item.id === Number(data.id));
  if (!expense) {
    console.log(
      `${warning}${yellow}Exexpense with ID "${data.id}" not found.${reset}`,
    );
    return;
  }

  if (data.description.trim()) {
    expense.description = data.description;
    expense.updatedAt = new Date();
  }
  if (Number(data.amount) > 0) {
    expense.amount = Number(data.amount);
    expense.updatedAt = new Date();
  }
  saveExpenses(expenses);

  console.log(
    `${success}${green}Expense updated successfully (ID: ${data.id})${reset}`,
  );
}

// Function to delete an expense
export function deleteExpense(id) {
  const expenses = loadExpenses();

  if (!id || isNaN(id)) {
    console.log(
      `${warning}${yellow}Please enter expense's ID as a number.${reset}`,
    );
    return;
  }

  const expenseIndex = expenses.findIndex((item) => item.id === Number(id));
  if (expenseIndex === -1) {
    console.log(
      `${warning}${yellow}Exexpense with ID "${id}" not found.${reset}`,
    );
    return;
  }

  expenses.splice(expenseIndex, 1);
  saveExpenses(expenses);
  console.log(`${success}${green}Expense deleted successfully.${reset}`);
}

// Function summary with optional month
export function summaryExpenses(month) {
  const expenses = loadExpenses();

  if (expenses.length === 0) {
    console.log(`${info}${blue}No expenses found!${reset}`);

    return;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let filteredExpenses = expenses;
  if (month) {
    if (isNaN(month)) {
      console.log(
        `${error}${red}Error: Invalid month number "${month}". Please enter the month as a number between 1 and 12.${reset}`,
      );

      return;
    }
    if (month <= 0 || month > 12) {
      console.log(
        `${error}${red}Error: Invalid month number "${month}". The number entered must be between 1 and 12.${reset}`,
      );

      return;
    }

    filteredExpenses = expenses
      .filter(
        (expense) =>
          Number(expense.createdAt.slice(0, 4)) === new Date().getFullYear(),
      )
      .filter(
        (expense) =>
          Number(expense.createdAt.split("T")[0].slice(5, 7)) === Number(month),
      );
  }

  const summary = filteredExpenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  console.log(
    `${info}${blue}Total expenses for ${months[month - 1]}: $${summary}${reset}`,
  );
}

// Function to export CSV file
export function exportExpenses() {
  const expenses = loadExpenses();

  const fields = ["id", "description", "amount", "createdAt"];

  const parser = new Parser({ fields });
  const csv = parser.parse(expenses);

  saveCSV(csv);
}
