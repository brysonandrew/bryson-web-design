/** @type {import('tailwindcss').Config} */
const { join } = require("path");
const SPACING = require("./tailwind.config-spacing.js");
const COLORS = require("./tailwind.config-colors.json");
const FONT_SIZE = require("./tailwind.config-font-size.js");
const GRID = require("./tailwind.config-grid.js");
const WIDTH = require("./tailwind.config-width.js");
const HEIGHT = require("./tailwind.config-height.js");
const SHADOW = require("./tailwind.config-shadow.js");

module.exports = {
  content: [
    join(__dirname, "./src/**/*.ts"),
    join(__dirname, "./src/**/*.tsx"),
  ],
  darkMode: "class",
  theme: {
    colors: COLORS,
    fontSize: FONT_SIZE,
    ...GRID,
    extend: {
      spacing: SPACING,
      backgroundColor: {
        current: "currentColor",
      },
      boxShadow: SHADOW,
      ...WIDTH,
      ...HEIGHT
    },
  },
};
