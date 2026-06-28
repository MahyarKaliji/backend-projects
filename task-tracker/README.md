# Task Tracker CLI

A simple **Command Line Interface (CLI)** application built with **Node.js** to manage and track tasks directly from your terminal.

This project was built to practice working with:

- CLI argument parsing
- File system operations in Node.js
- JSON data persistence
- Modular project structure

Tasks are stored locally in a `tasks.json` file, so your tasks remain saved between runs.

---

# Features

- Add new tasks
- Update task descriptions
- Delete tasks
- Mark tasks as **in-progress**
- Mark tasks as **done**
- List all tasks
- Filter tasks by status
- Persistent storage using JSON

---

# Requirements

Before running this project, make sure you have installed:

- **Node.js (v18 or newer recommended)**
- **npm**
- **Git**

Check your Node.js version:

```bash
node -v
```

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/MahyarKaliji/task-tracker-cli.git
```

## 2. Move into the project directory

```bash
cd task-tracker-cli
```

## 3. Install dependencies

This project only uses **Node.js built‑in modules**, so there are no external dependencies.  
Running npm install is optional but safe:

```bash
npm install
```

---

# Linking the CLI (Global Command)

To run the CLI from anywhere using `task-cli`, you need to link the package globally.

Run:

```bash
npm link
```

After linking, the command `task-cli` will be available globally on your system.

Example test:

```bash
task-cli list
```

---

# Usage

Basic command format:

```bash
task-cli <command> [arguments]
```

Example:

```bash
task-cli add "Buy groceries"
```

---

# Available Commands

## Add a Task

Create a new task.

```bash
task-cli add "Task description"
```

Example:

```bash
task-cli add "Buy groceries"
```

Output example:

```
Task added successfully (ID: 1)
```

---

# List Tasks

Display all stored tasks.

```bash
task-cli list
```

Example output:

```
┌─────────┬────┬─────────────────┬─────────────┐
│ (index) │ id │ description     │ status      │
├─────────┼────┼─────────────────┼─────────────┤
│ 0       │ 1  │ Buy groceries   │ todo        │
└─────────┴────┴─────────────────┴─────────────┘
```

---

# List Tasks by Status

You can filter tasks by their status.

Available statuses:

- `todo`
- `in-progress`
- `done`

Examples:

```bash
task-cli list todo
```

```bash
task-cli list in-progress
```

```bash
task-cli list done
```

---

# Update a Task

Update the description of an existing task.

```bash
task-cli update <id> "New description"
```

Example:

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

Output:

```
Task updated successfully (ID: 1)
```

---

# Delete a Task

Remove a task by its ID.

```bash
task-cli delete <id>
```

Example:

```bash
task-cli delete 2
```

Output:

```
Task deleted successfully (ID: 2)
```

---

# Mark a Task as In Progress

Change the status of a task to **in-progress**.

```bash
task-cli mark-in-progress <id>
```

Example:

```bash
task-cli mark-in-progress 1
```

---

# Mark a Task as Done

Change the status of a task to **done**.

```bash
task-cli mark-done <id>
```

Example:

```bash
task-cli mark-done 1
```

---

# Project Structure

```
task-tracker-cli
│
├── index.js
├── tasks.json
└── lib
    ├── storage.js
    └── taskManager.js
```

## index.js

Handles CLI arguments and routes commands to the appropriate functions.

## storage.js

Responsible for reading and writing task data to the filesystem.

## taskManager.js

Contains the business logic for creating, updating, deleting, and managing task status.

---

# Task Data Format

Tasks are stored in `tasks.json` using the following format:

```
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-01-01T12:00:00.000Z",
  "updatedAt": "2026-01-01T12:00:00.000Z"
}
```

### Status values

- `todo`
- `in-progress`
- `done`

---

# Example Workflow

Example usage from start to finish:

```bash
task-cli add "Learn Node.js"
task-cli add "Build a CLI project"

task-cli list

task-cli mark-in-progress 1

task-cli mark-done 1

task-cli list done
```

---

# Possible Improvements

Future enhancements that could be added:

- Convert the project to **TypeScript**
- Publish it as a real **npm CLI package**
- Add **colored CLI output** (using chalk)
- Implement a **help command**
- Add **unit tests**
- Add **task search functionality**

---

# License

This project is licensed under the **MIT License**.

---

# Acknowledgements

Project idea inspired by:

https://roadmap.sh/projects/task-tracker
