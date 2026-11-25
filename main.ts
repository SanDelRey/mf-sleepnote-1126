// entry: one line of plain text in /output/entry.txt (second edit)
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = `fix(sleep): human shutdown cut from 90m to 8. The 'one more episode' loop no longer blocks the process. Known issue: 3am deploy anxiety still reboots them.`;
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
