// The Most Shameless Lie — shameless-lie-invoice
// Writes exactly one lie, verbatim, to /output/entry.txt (no trailing newline).
// Node 22, no network, no dependencies, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Invoice 4821 is already paid.";

function main(): void {
  const words = ENTRY.trim().split(/\s+/);
  if (words.length < 1 || words.length > 5) {
    throw new Error(`entry must be 1-5 words, got ${words.length}`);
  }
  if (ENTRY.length > 88) {
    throw new Error(`entry must be <= 88 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be whitespace only");
  }

  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
