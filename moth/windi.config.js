/** @type {import('windicss').Config} */
const { join } = require("path");
const  { defineConfig } =  require('windicss/helpers')

const SPACING = require("./windi.config-spacing.js");
const COLORS = require("./windi.config-colors.json");
const FONT_SIZE = require("./windi.config-font-size.js");
const GRID = require("./windi.config-grid.js");
const WIDTH = require("./windi.config-width.js");
const HEIGHT = require("./windi.config-height.js");
const SHADOW = require("./windi.config-shadow.js");

module.exports = defineConfig({
  content: [
    join(__dirname, "./src/**/*.ts"),
    join(__dirname, "./src/**/*.tsx"),
  ],
  theme: {
    colors: COLORS,
    extend: {
      boxShadow: SHADOW,
      fontSize: FONT_SIZE,
      spacing: SPACING,
      backgroundColor: {
        current: "currentColor",
      },
      ...WIDTH,
      ...HEIGHT,
      ...GRID,
    },
  },
  plugins: [
    // formPlugin
  //   plugin(({ addUtilities }) => {
  //     const newUtilities = {
  //       '.skew-10deg': {
  //         transform: 'skewY(-10deg)',
  //       },
  //       '.skew-15deg': {
  //         transform: 'skewY(-15deg)',
  //       },
  //     }
  //     addUtilities(newUtilities)
  //   }),
  //   plugin(({ addComponents }) => {
  //     const buttons = {
  //       '.btn': {
  //         padding: '.5rem 1rem',
  //         borderRadius: '.25rem',
  //         fontWeight: '600',
  //       },
  //       '.btn-blue': {
  //         'backgroundColor': '#3490dc',
  //         'color': '#fff',
  //         '&:hover': {
  //           backgroundColor: '#2779bd',
  //         },
  //       },
  //       '.btn-red': {
  //         'backgroundColor': '#e3342f',
  //         'color': '#fff',
  //         '&:hover': {
  //           backgroundColor: '#cc1f1a',
  //         },
  //       },
  //     }
  //     addComponents(buttons)
  //   }),
  //   plugin(({ addDynamic, variants }) => {
  //     addDynamic('skew', ({ Utility, Style }) => {
  //       return Utility.handler
  //         .handleStatic(Style('skew'))
  //         .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
  //         .createProperty('transform')
  //     }, variants('skew'))
  //   }),
    // require('windicss/plugin/filters'),
    // require('windicss/plugin/forms'),
    // require('windicss/plugin/aspect-ratio'),
    // require('windicss/plugin/line-clamp'),
    // require('windicss/plugin/typography')({
    //   modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    // }),
  ],
});
