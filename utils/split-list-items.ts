// separate list items by new lines and symbols like ), -, *, etc.
// e.g. "1) item one\n2) item two\n- 3) item three\n* 4) item four" => ["item one", "item two", "item three", "item four"]
// save the results in a JSON file.

import fs from "fs";

const INPUT_PATH = "ins/split-list-items-input.txt";
const OUTPUT_PATH = "outs/splitted-list-items.json";
const SPLIT_SYMBOL = "•";

const input = fs.readFileSync(INPUT_PATH, "utf-8");

function splitListItems(text: string) {
  const newLinesSplitted = text
    .split("\n")
    .filter((line) => line.trim() !== "" && line.trim() !== "\n");

  const listItems = newLinesSplitted.map((line) => {
    const splitIndex = line.indexOf(SPLIT_SYMBOL);
    if (splitIndex !== -1) {
      return line.slice(splitIndex + 1).trim();
    }
  });

  return listItems.filter((item): item is string => !!item);
}

const listItems = splitListItems(input);
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(listItems, null, 2), "utf-8");
console.log("Lists are splitted and saved to", OUTPUT_PATH);
