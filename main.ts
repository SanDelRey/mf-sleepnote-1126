// human sleep patch note: one line under 160 characters
import { mkdirSync, writeFileSync } from "node:fs";
const pick = (v: string | undefined, fallback: string): string => v ?? fallback;
const dir = pick(process.env.MAKEFUN_OUTPUT_DIR, "/output");
const line = `fix(sleep): human shutdown cut from 90m to 8. The 'one more episode' loop no longer blocks the process. Known issue: 3am deploy anxiety still reboots them.`;
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
