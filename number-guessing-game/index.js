import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import colors from "../constants/colors.js";
import { error, info, success, warning } from "../constants/icons.js";

const { blue, green, red, reset, yellow } = colors;

const rl = readline.createInterface({ input, output });

function setRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let bestScore = Infinity;

function getDifficulty(level) {
  if (level === "1") return { level: "Easy", chances: 10 };
  if (level === "2") return { level: "Medium", chances: 5 };
  if (level === "3") return { level: "Hard", chances: 3 };
  return null;
}

async function playGame() {
  console.log(
    `I'm thinking of a number between ${yellow}1${reset} and ${yellow}100${reset}`,
  );

  const number = setRandomNumber();

  console.log(`\nPlease select the difficulty level:
${green}1. Easy (10 chances)${reset}
${yellow}2. Medium (5 chances)${reset}
${red}3. Hard (3 chances)${reset}`);

  const choice = await rl.question(`${blue}\nEnter your choice: ${reset}`);
  const start = Date.now();
  const difficulty = getDifficulty(choice);

  if (!difficulty?.chances) {
    console.log(`${error}${red}Invalid choice!${reset}`);

    return;
  }

  console.log(
    `\nGreat! You have selected the ${yellow}${difficulty.level}${reset} difficulty level.`,
  );
  console.log(`You have ${yellow}${difficulty.chances}${reset} chances.`);
  console.log(`Let's start the game!`);

  let attempts = 0;

  while (attempts < difficulty.chances) {
    const guess = Number(
      await rl.question(`\n${blue}Enter your guess: ${reset}`),
    );
    attempts++;

    if (guess === number) {
      const end = Date.now();
      console.log(
        `\n${green}${success}Congratulations!${reset} You guessed the correct number in ${attempts} attempts.`,
      );
      console.log(`Time: ${(end - start) / 1000}s`);

      if (attempts < bestScore) {
        bestScore = attempts;
        console.log(
          `🎉 New high score: ${green}${bestScore}${reset} attampts!`,
        );
      } else {
        console.log(
          `Best score so far: ${yellow}${bestScore}${reset} attampts`,
        );
      }

      return;
    }

    if (guess > number) {
      console.log(
        `\n${red}Incorrect!${reset} The number is less than ${guess}.`,
      );
    } else {
      console.log(
        `\n${red}Incorrect!${reset} The number is greater than ${guess}.`,
      );
    }

    console.log(
      `Remaining chances: ${difficulty.chances - attempts < difficulty.chances * (1 / 3) ? red : difficulty.chances - attempts > difficulty.chances * (2 / 3) ? green : yellow}${difficulty.chances - attempts}${reset}`,
    );
  }

  console.log(`You ran out of chances. The number was ${number}.`);
}

async function main() {
  console.log("\nWelcome to the Number Guessing Game!");

  while (true) {
    await playGame();

    const again = await rl.question("\nPlay again? (y/n): ");

    if (again.toLowerCase() !== "y") {
      console.log("Thanks for playing");
      rl.close();
      break;
    }
  }
}

main();
