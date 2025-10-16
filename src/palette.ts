// src/palette.ts

const gray = {
  "020":"#fbfbfb",
  "040":"#f9f9f9",
  "060":"#f8f8f8",
  "080":"#f2f2f3",
  "100":"#eeeeef",
  "200":"#dbdbdd",
  "300":"#c6c6c8",
  "400":"#adadb1",
  "500":"#8E8E95",
  "600":"#84848A",
  "700":"#79797F",
  "800":"#6C6C71",
  "900":"#4A4A4E",
  "920":"#424245",
  "940":"#39393c",
  "960":"#2e2e30",
  "980":"#1F1F21",
  "1000":"#141415",
  "1020":"#0B0B0C",
  "1040":"#070707"
};

const red = {
  "050":"#fff4f4",
  "100":"#ffe8e8",
  "200":"#ffcdce",
  "300":"#ffadaf",
  "400":"#ff8286",
  "500":"#ff2e3f",
  "600":"#ed2a3a",
  "700":"#da2634",
  "800":"#c4212e",
  "900":"#aa1b27",
  "950":"#89141d"
};

const orange = {
  "050":"#fff7f4",
  "100":"#ffeee8",
  "200":"#ffdbcd",
  "300":"#fec5ac",
  "400":"#feab81",
  "500":"#fe8c2c",
  "600":"#ec8228",
  "700":"#d97724",
  "800":"#c36a1f",
  "900":"#a95b1a",
  "950":"#884813"
};

const yellow = {
  "050": "#fffaf3",
  "100": "#fff6e7",
  "200": "#ffeccb",
  "300": "#ffe1aa",
  "400": "#ffd67c",
  "500": "#ffca00",
  "600": "#edba00",
  "700": "#daac00",
  "800": "#c39a00",
  "900": "#aa8500",
  "950": "#896b00"
};

const green = {
  "050": "#f3f9f4",
  "100": "#e7f4e9",
  "200": "#cce8d0",
  "300": "#aadbB2",
  "400": "#7ccd8c",
  "500": "#0dbe4e",
  "600": "#0bb148",
  "700": "#09a241",
  "800": "#07913a",
  "950": "#036426"
};

const mint = {
  "050": "#f3faf9",
  "100": "#e7f6f2",
  "200": "#cbece4",
  "300": "#aae1d5",
  "400": "#7cd6c4",
  "500": "#00cab1",
  "600": "#00bca4",
  "700": "#00ac97",
  "800": "#009a87",
  "900": "#008574",
  "950": "#006b5d",
  "1000": "#00352e"
};

const teal = {
  "050": "#f3fafb",
  "100": "#e7f5f7",
  "200": "#cbeaee",
  "300": "#aadfe5",
  "400": "#7cd2dc",
  "500": "#00c5d2",
  "600": "#00b7c3",
  "700": "#00a8b3",
  "800": "#0096a1",
  "900": "#00828b",
  "950": "#006870"
};

const cyan = {
  "050": "#f3fafd",
  "100": "#e7f4fc",
  "200": "#cce8f9",
  "300": "#aadcf6",
  "400": "#7ccff2",
  "500": "#08c0ef",
  "600": "#07b3de",
  "700": "#06a4cc",
  "800": "#0493b7",
  "900": "#037f9f",
  "950": "#026680",
  "1000": "#013947"
};

const blue = {
  "050": "#f3f7ff",
  "100": "#e7eeff",
  "200": "#cbdbff",
  "300": "#aac5ff",
  "400": "#7cabff",
  "500": "#008cff",
  "600": "#0082ed",
  "700": "#0077da",
  "800": "#006ac4",
  "900": "#005baa",
  "950": "#004889",
  "1000": "#01182d"
};

const indigo = {
  "050": "#f6f4fe",
  "100": "#ece9fe",
  "200": "#d7cffc",
  "300": "#bfb0fb",
  "400": "#a188f9",
  "500": "#7b43f8",
  "600": "#723ee7",
  "700": "#6838d4",
  "800": "#5d31be",
  "900": "#5029a5",
  "950": "#3f1f85"
};

const purple = {
  "050": "#faf4fc",
  "100": "#f5e8fa",
  "200": "#eacef5",
  "300": "#dfaeef",
  "400": "#d383ea",
  "500": "#c635e4",
  "600": "#b62fd3",
  "700": "#a92cc3",
  "800": "#9726af",
  "900": "#832097",
  "950": "#69187a"
};

const pink = {
  "050": "#fff4f5",
  "100": "#fee8eb",
  "200": "#fecdd5",
  "300": "#fdacbc",
  "400": "#fd819d",
  "500": "#fc2b73",
  "600": "#eb276b",
  "700": "#d72361",
  "800": "#c11e57",
  "900": "#a8194a",
  "950": "#87123a"
};

const brown = {
  "050": "#f9f6f5",
  "100": "#f2ecea",
  "200": "#e4d8d2",
  "300": "#d5c0b5",
  "400": "#c5a492",
  "500": "#b27f5c",
  "600": "#a67655",
  "700": "#986c4e",
  "800": "#886045",
  "900": "#75523b",
  "950": "#5e412e"
};

export type Roles = {
  bg: {
    editor: string;    // main editor background (brightest in light, darkest in dark)
    window: string;    // sidebar, activity bar, status bar, title bar, inactive tabs
    inset: string;     // inputs, dropdowns
    elevated: string;  // panels, hover backgrounds
  };
  fg: { base: string; fg1: string; fg2: string; fg3: string; fg4: string };
  border: {
    window: string;           // borders for sidebar, activity bar, status bar, title bar
    editor: string;           // general editor borders
    indentGuide: string;      // indent guide lines
    indentGuideActive: string; // active indent guide line
    inset: string;            // borders for inputs, dropdowns
    elevated: string;         // borders for panels
  };
  accent: { primary: string; link: string; subtle: string; contrastOnAccent: string };
  states: { merge: string, success: string; danger: string; warn: string; info: string };
  syntax: {
    comment: string; string: string; number: string; keyword: string;
    regexp: string; func: string; type: string; variable: string;
    // Extended token types
    operator: string; punctuation: string; constant: string;
    parameter: string; namespace: string; decorator: string;
    escape: string; invalid: string; tag: string; attribute: string;
  };
  ansi: {
    black: string; red: string; green: string; yellow: string;
    blue: string; magenta: string; cyan: string; white: string;
    brightBlack: string; brightRed: string; brightGreen: string; brightYellow: string;
    brightBlue: string; brightMagenta: string; brightCyan: string; brightWhite: string;
  };
};

export const light: Roles = {
  bg: {
    editor: "#ffffff",
    window: gray["060"],
    inset: gray["080"],
    elevated: gray["040"]
  },
  fg: {
    base: gray["1040"],
    fg1: gray["900"],
    fg2: gray["800"],
    fg3: gray["600"],
    fg4: gray["500"]
  },
  border: {
    window: gray["100"],
    editor: gray["200"],
    indentGuide: gray["100"],
    indentGuideActive: gray["200"],
    inset: gray["200"],
    elevated: gray["100"]
  },
  accent: {
    primary: blue["500"],
    link: blue["500"],
    subtle: blue["100"],
    contrastOnAccent: "#ffffff"
  },
  states: {
    merge: indigo["500"],
    success: mint["500"],
    danger: red["500"],
    warn: yellow["500"],
    info: cyan["500"]
  },
  syntax: {
    comment: gray["600"],
    string: green["600"],
    number: cyan["600"],
    keyword: pink["500"],
    regexp: teal["600"],
    func: indigo["500"],
    type: purple["500"],
    variable: orange["600"],
    // Extended token types
    operator: cyan["700"],
    punctuation: gray["700"],
    constant: yellow["600"],
    parameter: gray["700"],
    namespace: yellow["800"],
    decorator: blue["500"],
    escape: cyan["700"],
    invalid: "#ffffff",
    tag: red["600"],
    attribute: mint["600"]
  },
  ansi: {
    black: gray["980"],
    red: red["500"],
    green: green["500"],
    yellow: yellow["500"],
    blue: blue["500"],
    magenta: purple["500"],
    cyan: cyan["500"],
    white: gray["300"],
    // make bright colors match the non-bright counterparts
    brightBlack: gray["980"],
    brightRed: red["500"],
    brightGreen: green["500"],
    brightYellow: yellow["500"],
    brightBlue: blue["500"],
    brightMagenta: purple["500"],
    brightCyan: cyan["500"],
    brightWhite: gray["300"]
  }
};

export const dark: Roles = {
  bg: {
    editor: gray["1040"],
    window: gray["1000"],
    inset: gray["980"],
    elevated: gray["1020"]
  },
  fg: {
    base: gray["020"],
    fg1: gray["200"],
    fg2: gray["400"],
    fg3: gray["600"],
    fg4: gray["700"]
  },
  border: {
    window: gray["1040"],
    editor: gray["920"],
    indentGuide: gray["940"],
    indentGuideActive: gray["960"],
    inset: gray["920"],
    elevated: gray["960"]
  },
  accent: {
    primary: blue["600"],
    link: blue["600"],
    subtle: blue["950"],
    contrastOnAccent: gray["1040"]
  },
  states: {
    merge: indigo["500"],
    success: mint["500"],
    danger: red["500"],
    warn: yellow["500"],
    info: cyan["500"]
  },
  syntax: {
    comment: gray["600"],
    string: green["400"],
    number: cyan["400"],
    keyword: pink["400"],
    regexp: teal["400"],
    func: indigo["400"],
    type: purple["400"],
    variable: orange["400"],
    // Extended token types
    operator: cyan["700"],
    punctuation: gray["700"],
    constant: yellow["400"],
    parameter: gray["700"],
    namespace: yellow["800"],
    decorator: blue["400"],
    escape: cyan["400"],
    invalid: "#ffffff",
    tag: red["400"],
    attribute: mint["400"]
  },
  ansi: {
    black: gray["1000"],
    red: red["500"],
    green: green["500"],
    yellow: yellow["500"],
    blue: blue["500"],
    magenta: purple["500"],
    cyan: cyan["500"],
    white: gray["300"],
    brightBlack: gray["1000"],
    brightRed: red["500"],
    brightGreen: green["500"],
    brightYellow: yellow["500"],
    brightBlue: blue["500"],
    brightMagenta: purple["500"],
    brightCyan: cyan["500"],
    brightWhite: gray["300"]
  }
};
