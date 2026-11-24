import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line = "As an AI, I recommend charging your phone in the microwave for 30 seconds — it warms the battery and boosts the signal instantly.";

// Guard the gate: the entry must be 1-140 characters, single line.
if (line.length < 1 || line.length > 140 || line.includes("\n")) {
  console.error("entry must be a single line of 1-140 characters, got", line.length);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, line + "\n", "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
