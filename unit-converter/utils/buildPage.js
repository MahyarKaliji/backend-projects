import fs from "node:fs";
import path from "node:path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

/**
 *
 * @param {string} page - 'length' | 'weight' | 'temperature'
 * @param {object} data - { value, from, to, result }
 * @param {boolean} showResult
 */

export function buildPage(page, data = {}, showResult = false) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = path.join(__dirname, "..", "views", `${page}.html`);
  let html = fs.readFileSync(filePath, "utf-8");
  console.log(data);

  html = html
    .replace(/{{VALUE}}/g, data.value ?? "")
    .replace(
      "{{FROM}}",
      page === "temperature" ? `°${data.from}` : (data.from ?? ""),
    )
    .replace("{{TO}}", page === "temperature" ? `°${data.to}` : (data.to ?? ""))
    .replace("{{RESULT_CLASS}}", showResult ? "" : "hidden")
    .replace("{{FORM_CLASS}}", showResult ? "hidden" : "")
    .replace("{{RESULT_TEXT}}", data.result ?? "");

  return html;
}
