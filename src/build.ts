// src/build.ts
import { writeFileSync, mkdirSync } from "node:fs";
import { light as rolesLight, dark as rolesDark } from "./palette";
import { makeTheme } from "./theme";
import { convertRolesToP3 } from "./color-p3";

mkdirSync("themes", { recursive: true });

// Convert palettes to Display P3 color space
const rolesLightP3 = convertRolesToP3(rolesLight);
const rolesDarkP3 = convertRolesToP3(rolesDark);

const out = [
  { file: "themes/pierre-light.json", theme: makeTheme("Pierre Light", "light", rolesLight) },
  { file: "themes/pierre-dark.json",  theme: makeTheme("Pierre Dark",  "dark",  rolesDark)  },
  { file: "themes/pierre-light-vibrant.json", theme: makeTheme("Pierre Light Vibrant", "light", rolesLightP3) },
  { file: "themes/pierre-dark-vibrant.json",  theme: makeTheme("Pierre Dark Vibrant",  "dark",  rolesDarkP3)  }
];

for (const {file, theme} of out) {
  writeFileSync(file, JSON.stringify(theme, null, 2), "utf8");
  console.log("Wrote", file);
}
