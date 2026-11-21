const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// A fixed literal keeps the UTF-8 entry identical on every run.
const entry =
  "The tide eases back. Between two stones, a pool keeps the sun's last warmth. One star appears in it, then another. Light has crossed the dark for centuries to lie here, in a hollow of warm stone.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
// The terminating newline counts toward the 280-code-point limit.
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
