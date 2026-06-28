# Expense Tracker CLI

A simple command-line Expense Tracker built with Node.js.  
This project allows you to add, update, delete, list, summarize, and export expenses.

## Features

- Add a new expense
- Update an existing expense
- Delete an expense
- View all expenses
- View total expenses summary
- View monthly expense summary
- Export expenses to CSV

## Technologies Used

- Node.js
- Commander.js
- JSON file storage
- ES Modules

## Project Structure

```bash
expense-tracker/
│
├── lib/
│    ├── expensesManager.js
│    ├── storage.js
├── index.js
├── expenses.json
├── expenses.csv
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MahyarKaliji/backend-projects/tree/main/expense-tracker
cd expense-tracker
```

2. Install dependencies:

```bash
npm install
```

## Usage

Run commands using:

```bash
node index.js <command>
```

---

## Commands

### Add Expense

```bash
node index.js add --description "Lunch" --amount 20
```

Example output:

```bash
Expense added successfully (ID: 1)
```

---

### Update Expense

```bash
node index.js update --id 1 --description "Dinner" --amount 25
```

Example output:

```bash
Expense updated successfully
```

---

### Delete Expense

```bash
node index.js delete --id 1
```

Example output:

```bash
Expense deleted successfully
```

---

### List Expenses

```bash
node index.js list
```

Example output:

```bash
ID   Date         Description   Amount
1    2026-01-04   Lunch         $20
2    2026-01-05   Coffee        $10
```

---

### View Total Summary

```bash
node index.js summary
```

Example output:

```bash
Total expenses: $30
```

---

### View Monthly Summary

```bash
node index.js summary --month 1
```

Example output:

```bash
Total expenses for January: $30
```

---

### Export to CSV

```bash
node index.js export
```

Example output:

```bash
Expenses exported successfully to expenses.csv
```

---

## Data Storage

Expenses are stored in a local JSON file named `expenses.json`.

Example:

```json
[
  {
    "id": 1,
    "date": "2026-01-04",
    "description": "Lunch",
    "amount": 20
  },
  {
    "id": 2,
    "date": "2026-01-05",
    "description": "Coffee",
    "amount": 10
  }
]
```

---

## CSV Export Format

When exported, the data is saved in `expenses.csv` in this format:

```csv
id,date,description,amount
1,2026-01-04,Lunch,20
2,2026-01-05,Coffee,10
```

---

## Notes

- This project uses **ES Modules**, so make sure your `package.json` includes:

```json
"type": "module"
```

- If `expenses.json` does not exist, create it with an empty array:

```json
[]
```

---

## Future Improvements

- Add categories for expenses
- Add input validation
- Add filtering by date range
- Add colored terminal output
- Store data in a database instead of JSON

## License

This project is open-source and available under the MIT License.
