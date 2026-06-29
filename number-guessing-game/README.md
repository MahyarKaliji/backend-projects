# 🎯 Number Guessing Game (CLI)

A simple CLI-based Number Guessing Game built with Node.js.

The computer randomly selects a number between **1 and 100**, and you must guess it within a limited number of attempts based on your selected difficulty level.

---

## 🚀 Features

- ✅ CLI-based interactive gameplay
- ✅ Three difficulty levels (Easy, Medium, Hard)
- ✅ Colored terminal output
- ✅ Remaining chances indicator (color-coded)
- ✅ Timer (shows how long it took to guess)
- ✅ High score tracking (best attempt count per session)
- ✅ Play multiple rounds

---

## 🎮 How It Works

1. The game selects a random number between **1 and 100**
2. You choose a difficulty level:
   - 🟢 Easy → 10 chances
   - 🟡 Medium → 5 chances
   - 🔴 Hard → 3 chances
3. Enter your guesses
4. The game tells you if the number is **greater or less**
5. The game ends when:
   - You guess correctly 🎉
   - You run out of chances ❌
6. You can play again after each round

---

## 🏆 High Score

- The game tracks the **fewest attempts** it took to guess correctly.
- High score resets when the program restarts.
- A new high score is announced when beaten.

---

## ⏱ Timer

The game displays how many seconds it took you to guess the correct number.

---

## 📦 Installation

Make sure you have **Node.js 18+** installed.

```bash
node -v
```

Clone the repository:

```bash
git clone https://github.com/MahyarKaliji/backend-projects/tree/main/number-guessing-game
cd number-guessing-game
```

Install dependencies (if any):

```bash
npm install
```

---

## ▶️ Run the Game

```bash
node index.js
```

(or whatever your entry file is)

---

## 📁 Project Structure

```
.
├── index.js
└── README.md
```

---

## 🛠 Built With

- Node.js
- readline/promises
- ES Modules
- ANSI color styling

---

## 💡 Possible Future Improvements

- Persist high score using a JSON file
- Add hint system (e.g., "very close")
- Add difficulty-based high scores
- Add input validation for non-numeric guesses
- Add sound effects
- Publish as an npm CLI package

---

## 🧠 What I Practiced

- Async/Await in Node.js
- Working with CLI input/output
- Game loop logic
- State management
- Simple performance tracking
- Clean terminal UX

---

## 📄 License

MIT

---
