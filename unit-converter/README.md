# Unit Converter

A simple web-based unit converter built with Node.js and Express.
Supports Length, Weight, and Temperature conversions.

---

## Features

- Convert between common units of Length, Weight, and Temperature
- Clean, minimal UI served as static HTML
- Modular routing with Express Router
- No frontend framework — pure HTML/CSS

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Module System:** ES Modules (`import/export`)
- **Templating:** Custom `buildPage` function (string interpolation)

---

## Project Structure

unit-converter/
├── controllers/
│ ├── lengthController.js
│ ├── weightController.js
│ └── temperatureController.js
├── public/
│ └── styles.css
├── routes/
│ ├── lengthRouter.js
│ ├── weightRouter.js
│ └── temperatureRouter.js
├── utils/
│ ├── buildPage.js
│ └── converter.js
├── views/
│ ├── length.html
│ ├── weight.html
│ └── temperature.html
├── app.js
├── package.json
├── server.js
└── README.md

---

## Getting Started

### Prerequisites

- Node.js v18+

### Install

Make sure you have **Node.js 18+** installed.

```bash
node -v
```

Clone the repository:

```bash
git clone https://github.com/MahyarKaliji/backend-projects/tree/main/unit-converter
cd unit-converter
```

Install dependencies (if any):

```bash
npm install
```

### Run

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Routes

| Method | Path           | Description              |
| ------ | -------------- | ------------------------ |
| GET    | `/length`      | Length converter page    |
| POST   | `/length`      | Submit length conversion |
| GET    | `/weight`      | Weight converter page    |
| POST   | `/weight`      | Submit weight conversion |
| GET    | `/temperature` | Temperature converter    |
| POST   | `/temperature` | Submit temp conversion   |

---

## Supported Units

**Length:** `km`, `m`, `cm`, `mm`, `mile`, `yard`, `foot`, `inch`

**Weight:** `kg`, `g`, `mg`, `lb`, `oz`

**Temperature:** `celsius`, `fahrenheit`, `kelvin`

---

## Notes

- `__dirname` is manually defined in each file due to ES Module limitations:
  ```js
  import { fileURLToPath } from "url";
  import { dirname } from "path";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  ```
- Form body parsing is handled by `express.urlencoded({ extended: true })`
- After conversion, a "Convert again" link resets the form by redirecting to the GET route

---

## License

MIT
