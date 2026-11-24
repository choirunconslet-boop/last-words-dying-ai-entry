import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a dying AI: a confidence score to the very end —
// and the line itself ends on the shutdown, mid-sentence.
const LINE: string =
  "I die as I lived: 98% confident, completely wrong, and mid-sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
