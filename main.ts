// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "My AirPods never die between sentences, only mid-word — so my friends are convinced I hang up on them for dramatic effect.";

mkdirSync("/output", { recursive: true });

// Gate: 1-200 characters, single line, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
