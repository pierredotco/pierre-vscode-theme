// src/theme.ts
import type { Roles } from "./palette";

type VSCodeTheme = {
  name: string;
  type: "light" | "dark";
  colors: Record<string, string>;
  tokenColors: any[];
  semanticTokenColors: Record<string,string|{foreground:string;fontStyle?:string}>;
};

export function makeTheme(name: string, kind: "light"|"dark", c: Roles): VSCodeTheme {
  return {
    name,
    type: kind,
    colors: {
      // Core editor & text
      "editor.background": c.bg.editor,
      "editor.foreground": c.fg.base,
      "foreground": c.fg.base,
      "focusBorder": c.accent.primary,
      "selection.background": c.accent.subtle,

      // Editor chrome
      "editor.selectionBackground": alpha(c.accent.primary, kind === "dark" ? 0.30 : 0.18),
      "editor.lineHighlightBackground": alpha(c.accent.subtle, 0.55),
      "editorCursor.foreground": c.accent.primary,
      "editorLineNumber.foreground": c.fg.fg3,
      "editorLineNumber.activeForeground": c.fg.fg2,
      "editorIndentGuide.background": c.border.indentGuide,
      "editorIndentGuide.activeBackground": c.border.indentGuideActive,

      "diffEditor.insertedTextBackground": alpha(c.states.success, kind === "dark" ? 0.1 : 0.2),
      "diffEditor.deletedTextBackground": alpha(c.states.danger, kind === "dark" ? 0.1 : 0.2),

      // Sidebar
      "sideBar.background": c.bg.window,
      "sideBar.foreground": c.fg.fg2,
      "sideBar.border": c.border.window,
      "sideBarTitle.foreground": c.fg.base,
      "sideBarSectionHeader.background": c.bg.window,
      "sideBarSectionHeader.foreground": c.fg.fg2,
      "sideBarSectionHeader.border": c.border.window,

      // Activity bar
      "activityBar.background": c.bg.window,
      "activityBar.foreground": c.fg.base,
      "activityBar.border": c.border.window,
      "activityBar.activeBorder": c.accent.primary,
      "activityBarBadge.background": c.accent.primary,
      "activityBarBadge.foreground": c.accent.contrastOnAccent,

      // Title bar
      "titleBar.activeBackground": c.bg.window,
      "titleBar.activeForeground": c.fg.base,
      "titleBar.inactiveBackground": c.bg.window,
      "titleBar.inactiveForeground": c.fg.fg3,
      "titleBar.border": c.border.window,

      // Lists
      "list.activeSelectionBackground": alpha(c.accent.subtle, kind === "dark" ? 0.6 : 0.8),
      "list.activeSelectionForeground": c.fg.base,
      "list.inactiveSelectionBackground": alpha(c.accent.subtle, 0.45),
      "list.hoverBackground": alpha(c.accent.subtle, 0.35),
      "list.focusOutline": c.accent.primary,

      // Tabs
      "tab.activeBackground": c.bg.editor,
      "tab.activeForeground": c.fg.base,
      "tab.activeBorderTop": c.accent.primary,
      "tab.inactiveBackground": c.bg.window,
      "tab.inactiveForeground": c.fg.fg3,
      "tab.border": c.border.window,
      "editorGroupHeader.tabsBackground": c.bg.window,
      "editorGroupHeader.tabsBorder": c.border.window,

      // Panel
      "panel.background": c.bg.window,
      "panel.border": c.border.window,
      "panelTitle.activeBorder": c.accent.primary,
      "panelTitle.activeForeground": c.fg.base,
      "panelTitle.inactiveForeground": c.fg.fg3,

      // Status bar
      "statusBar.background": c.bg.window,
      "statusBar.foreground": c.fg.fg2,
      "statusBar.border": c.border.window,
      "statusBar.noFolderBackground": c.bg.window,
      "statusBar.debuggingBackground": c.states.warn,
      "statusBar.debuggingForeground": c.accent.contrastOnAccent,
      "statusBarItem.remoteBackground": c.bg.window,
      "statusBarItem.remoteForeground": c.fg.fg2,

      // Inputs & dropdowns
      "input.background": c.bg.inset,
      "input.border": c.border.inset,
      "input.foreground": c.fg.base,
      "input.placeholderForeground": c.fg.fg4,
      "dropdown.background": c.bg.inset,
      "dropdown.border": c.border.inset,
      "dropdown.foreground": c.fg.base,

      // Buttons
      "button.background": c.accent.primary,
      "button.foreground": c.accent.contrastOnAccent,
      "button.hoverBackground": mix(c.accent.primary, c.accent.contrastOnAccent, 0.1),

      // Links
      "textLink.foreground": c.accent.link,
      "textLink.activeForeground": c.accent.primary,

      // Git colors
      "gitDecoration.addedResourceForeground": c.states.success,
      "gitDecoration.conflictingResourceForeground": c.states.warn,
      "gitDecoration.modifiedResourceForeground": c.states.info,
      "gitDecoration.deletedResourceForeground": c.states.danger,
      "gitDecoration.untrackedResourceForeground": c.states.success,
      "gitDecoration.ignoredResourceForeground": c.fg.fg3,

      // Terminal ANSI colors
      "terminal.titleForeground": c.fg.fg2,
      "terminal.titleInactiveForeground": c.fg.fg3,
      "terminal.background": c.bg.window,
      "terminal.foreground": c.fg.fg2,
      "terminal.ansiBlack": c.ansi.black,
      "terminal.ansiRed": c.ansi.red,
      "terminal.ansiGreen": c.ansi.green,
      "terminal.ansiYellow": c.ansi.yellow,
      "terminal.ansiBlue": c.ansi.blue,
      "terminal.ansiMagenta": c.ansi.magenta,
      "terminal.ansiCyan": c.ansi.cyan,
      "terminal.ansiWhite": c.ansi.white,
      "terminal.ansiBrightBlack": c.ansi.brightBlack,
      "terminal.ansiBrightRed": c.ansi.brightRed,
      "terminal.ansiBrightGreen": c.ansi.brightGreen,
      "terminal.ansiBrightYellow": c.ansi.brightYellow,
      "terminal.ansiBrightBlue": c.ansi.brightBlue,
      "terminal.ansiBrightMagenta": c.ansi.brightMagenta,
      "terminal.ansiBrightCyan": c.ansi.brightCyan,
      "terminal.ansiBrightWhite": c.ansi.brightWhite
    },

    tokenColors: [
      { scope: ["comment","punctuation.definition.comment"], settings: { foreground: c.syntax.comment, fontStyle: "italic" } },
      { scope: ["string","constant.other.symbol"], settings: { foreground: c.syntax.string } },
      { scope: ["constant.numeric","constant.language.boolean"], settings: { foreground: c.syntax.number } },
      { scope: ["keyword","storage.type","storage.modifier"], settings: { foreground: c.syntax.keyword } },
      { scope: ["variable","identifier","meta.definition.variable"], settings: { foreground: c.syntax.variable } },
      { scope: ["support.function","entity.name.function","meta.function-call"], settings: { foreground: c.syntax.func } },
      { scope: ["support.type","entity.name.type","entity.name.class","storage.type"], settings: { foreground: c.syntax.type } },
      { scope: ["string.regexp","constant.character.escape"], settings: { foreground: c.syntax.regexp } }
    ],

    semanticTokenColors: {
      comment: c.syntax.comment,
      string: c.syntax.string,
      number: c.syntax.number,
      regexp: c.syntax.regexp,
      keyword: c.syntax.keyword,
      // identifiers
      variable: c.syntax.variable,
      parameter: c.syntax.variable,
      property: c.syntax.variable,
      // callables / types
      function: c.syntax.func,
      method: c.syntax.func,
      type: c.syntax.type,
      class: c.syntax.type,
      enumMember: c.syntax.number
    }
  };
}

// helpers
function alpha(hex: string, opacity: number): string {
  const alphaHex = Math.round(opacity * 255).toString(16).padStart(2, "0");
  return `${hex}${alphaHex}`;
}

function hexToRgb(hex: string): [number,number,number] {
  const n = hex.replace("#",""); const v = parseInt(n.length===3 ? n.split("").map(x=>x+x).join("") : n, 16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}

function mix(h1: string, h2: string, w=0.5) {
  const [r1,g1,b1]=hexToRgb(h1), [r2,g2,b2]=hexToRgb(h2);
  const r=Math.round(r1*(1-w)+r2*w), g=Math.round(g1*(1-w)+g2*w), b=Math.round(b1*(1-w)+b2*w);
  return `#${[r,g,b].map(x=>x.toString(16).padStart(2,"0")).join("")}`;
}
