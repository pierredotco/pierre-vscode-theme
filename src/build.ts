// src/build.ts
import { writeFileSync, mkdirSync } from "node:fs";
import { light as rolesLight, dark as rolesDark } from "./palette";
import { makeTheme } from "./theme";

mkdirSync("themes", { recursive: true });

const out = [
  { file: "themes/light.json", theme: makeTheme("Pierre 2 Light", "light", rolesLight) },
  { file: "themes/dark.json",  theme: makeTheme("Pierre 2 Dark",  "dark",  rolesDark)  }
];

for (const {file, theme} of out) {
  writeFileSync(file, JSON.stringify(theme, null, 2), "utf8");
  console.log("Wrote", file);
}
