#!/usr/bin/env node
import { Command } from "commander";
import {
  addExpense,
  deleteExpense,
  exportExpenses,
  listExpenses,
  summaryExpenses,
  updateExpense,
} from "./lib/expenseManager.js";

// const { listExpenses, addExpense } = require("./lib/expenseManager");

// console.log(process.argv);
const program = new Command();

program
  .command("add")
  .requiredOption("--description <text>")
  .option("--amount <number>")
  .action((options) => {
    console.log("Add a new Expense", options);
    console.log("Description:", options.description);
    console.log("Amount:", options.amount);
    addExpense(options);
  });

program.command("list").action(() => listExpenses());

program
  .command("update")
  .option("--id <number>")
  .option("--description <text>")
  .option("--amount <number>")
  .action((options) => updateExpense(options));

program
  .command("delete")
  .option("--id <number>")
  .action(({ id }) => deleteExpense(id));

program
  .command("summary")
  .option("--month <number>")
  .action(({ month }) => summaryExpenses(month));

program.command("export").action(() => exportExpenses());

program.parse(process.argv);
// const args = process.argv.slice(2);
// const command = args[0];

// const description = args[args.findIndex((arg) => arg === "--description") + 1];
// const amount = args[args.findIndex((arg) => arg === "--amount") + 1];
// console.log(command);
// console.log(description);
// console.log(amount);
// addExpense(description, amount);
// listExpenses();
