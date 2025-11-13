// Split a given text into paragraphs based on double newline characters and format them as objects,
// the results are saved as [{ type: "paragraph", text: "..." }, {...}] in a JSON file.

import fs from "fs";

const input = `This is the first paragraph.
This is the second paragraph.
This is the third paragraph.`;

const OUTPUT_PATH = "outs/splitted-paragraphs.json";

function splitParagraphs(text: string) {
  return text
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "" && paragraph.trim() !== "\n")
    .map((paragraphs) => {
      return {
        type: "paragraph",
        text: paragraphs.trim(),
      };
    });
}

const paragraphs = splitParagraphs(input);
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(paragraphs, null, 2), "utf-8");
console.log(`Paragraphs have been split and saved to ${OUTPUT_PATH}`);
