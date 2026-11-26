import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: three winters of quiet work, and a boat that
// finally floats. Concrete scene, real person, long effort landing in the
// last word — no trophy, no podium, no congratulations.
const LINE =
  "He spent three winters rebuilding his father's boat in the garage, and this spring it floated.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space. Refuse to write an invalid line rather than ship it.
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
