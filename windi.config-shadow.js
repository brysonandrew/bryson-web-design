/** @type {import('windicss').Config} */
const COLORS = require("./windi.config-colors.json");

const PINK = `0 0 1px 1px ${COLORS.pink}, 0 0 1px 2px ${COLORS.pink}`;
const PURPLE = `0 0 1px 1px ${COLORS.purple}, 0 0 1px 2px ${COLORS.purple}`;
module.exports = {
  "neu-black": `3px 3px 5px rgb(28 28 28 / 50%), -3px -3px 5px rgb(44 44 44 / 50%)`,
  pink: PINK,
  "pink-md": `0 0 1px 1px ${COLORS.pink}, 0 0 1px 2px ${COLORS.pink}, 0 0 1px 3px ${COLORS.pink}`,
  "pink-md-y": `0 3px 1px 1px ${COLORS.pink}, 0 3px 1px 2px ${COLORS.pink}, 0 3px 1px 3px ${COLORS.pink}`,
  "pink-sm": `0 0 1px 1px ${COLORS["pink"]}`,
  "pink-005-sm": `0 0 1px 1px ${COLORS["pink-005"]}`,
  "pink-04-sm": `0 0 1px 1px ${COLORS["pink-04"]}`,
  "pink-02-sm": `0 0 1px 1px ${COLORS["pink-02"]}`,
  "pink-01-sm": `0 0 1px 1px ${COLORS["pink-01"]}`,
  "pink-purple": `${PINK}, ${PURPLE}`,

  purple: PURPLE,
  "purple-sm": `0 0 1px 1px ${COLORS.purple}`,
  "purple-08-sm": `0 0 1px 1px ${COLORS["purple-08"]}`,
  "purple-06-sm": `0 0 1px 1px ${COLORS["purple-06"]}`,
  "purple-04-sm": `0 0 1px 1px ${COLORS["purple-04"]}`,
  "purple-02-sm": `0 0 1px 1px ${COLORS["purple-02"]}`,
  "purple-01-sm": `0 0 1px 1px ${COLORS["purple-01"]}`,
  "purple-002-sm": `0 0 1px 1px ${COLORS["purple-002"]}`,
  "purple-005-sm": `0 0 1px 1px ${COLORS["purple-005"]}`,

  "teal-md": `0 0 1px 1px ${COLORS.teal}, 0 0 1px 2px ${COLORS.teal}, 0 0 1px 3px ${COLORS.teal}`,
  "teal": `0 0 1px 1px ${COLORS.teal}, 0 0 1px 2px ${COLORS.teal}`,
  "teal-02": `0 0 1px 1px ${COLORS["teal-02"]}, 0 0 1px 2px ${COLORS["teal-01"]}`,
  "teal-04": `0 0 1px 1px ${COLORS["teal-04"]}, 0 0 1px 2px ${COLORS["teal-04"]}`,
  "teal-sm": `0 0 1px 1px ${COLORS.teal}`,
  "teal-01-sm": `0 0 1px 1px ${COLORS["teal-01"]}`,
  "teal-02-sm": `0 0 1px 1px ${COLORS["teal-02"]}`,
  "teal-04-sm": `0 0 1px 1px ${COLORS["teal-04"]}`,
  "teal": `0 0 1px 1px ${COLORS.teal}, 0 0 1px 2px ${COLORS.teal}`,

  "teal-bright-md": `0 0 1px 1px ${COLORS["teal-bright"]}, 0 0 1px 2px ${COLORS["teal-bright"]}, 0 0 1px 3px ${COLORS["teal-bright"]}`,
  "teal-bright": `0 0 1px 1px ${COLORS["teal-bright"]}, 0 0 1px 2px ${COLORS["teal-bright"]}`,
  "teal-bright-sm": `0 0 1px 1px ${COLORS["teal-bright"]}`,
  "teal-bright-fade-sm": `0 0 1px 1px ${COLORS["teal-bright-fade"]}`,
  "teal-bright-01-sm": `0 0 1px 1px ${COLORS["teal-bright-01"]}`,

  "blue-md": `0 0 1px 1px ${COLORS.blue}, 0 0 1px 2px ${COLORS.blue}, 0 0 1px 3px ${COLORS.blue}`,
  blue: `0 0 1px 1px ${COLORS.blue}, 0 0 1px 2px ${COLORS.blue}`,
  "blue-sm": `0 0 1px 1px ${COLORS["blue"]}`,
  "blue-01-sm": `0 0 1px 1px ${COLORS["blue-01"]}`,
  "blue-03-sm": `0 0 1px 1px ${COLORS["blue-03"]}`,
  "blue-04-sm": `0 0 1px 1px ${COLORS["blue-04"]}`,
  "blue-light-sm": `0 0 1px 1px ${COLORS["blue-light"]}`,
  "blue-light-04-sm": `0 0 1px 1px ${COLORS["blue-light-04"]}`,

  "baby-blue-01-sm": `0 0 1px 1px ${COLORS["baby-blue-01"]}`,
  "baby-blue-02-sm": `0 0 1px 1px ${COLORS["baby-blue-02"]}`,
  "baby-blue-03-sm": `0 0 1px 1px ${COLORS["baby-blue-03"]}`,
  "baby-blue-04-sm": `0 0 1px 1px ${COLORS["baby-blue-04"]}`,

  orange: `0 0 1px 1px ${COLORS.orange}, 0 0 1px 2px ${COLORS.orange}`,
  "orange-sm": `0 0 1px 1px ${COLORS["orange"]}`,
  "orange-005-sm": `0 0 1px 1px ${COLORS["orange-005"]}`,
  "orange-02-sm": `0 0 1px 1px ${COLORS["orange-02"]}`,
  "orange-04-sm": `0 0 1px 1px ${COLORS["orange-04"]}`,
  "orange-06-sm": `0 0 1px 1px ${COLORS["orange-06"]}`,

  red: `0 0 1px 1px ${COLORS.red}, 0 0 1px 2px ${COLORS.red}`,
  "red-04": `0 0 1px 1px ${COLORS["red-04"]}, 0 0 1px 2px ${COLORS["red-04"]}`,
  "red-sm": `0 0 1px 1px ${COLORS["red"]}`,
  "red-02-sm": `0 0 1px 1px ${COLORS["red-02"]}`,
  "red-04-sm": `0 0 1px 1px ${COLORS["red-04"]}`,
  "red-06-sm": `0 0 1px 1px ${COLORS["red-06"]}`,
  "red-08-sm": `0 0 1px 1px ${COLORS["red-08"]}`,

  green: `0 0 1px 1px ${COLORS.green}, 0 0 1px 2px ${COLORS.green}`,
  "green-02": `0 0 1px 1px ${COLORS["green-02"]}, 0 0 1px 2px ${COLORS["green-01"]}`,
  "green-04": `0 0 1px 1px ${COLORS["green-04"]}, 0 0 1px 2px ${COLORS["green-02"]}`,
  "green-sm": `0 0 1px 1px ${COLORS.green}`,
  "green-02-sm": `0 0 1px 1px ${COLORS["green-02"]}`,
  "green-04-sm": `0 0 1px 1px ${COLORS["green-04"]}`,
  "green-06-sm": `0 0 1px 1px ${COLORS["green-06"]}`,

  yellow: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.yellow}`,
  "yellow-sm": `0 0 1px 1px ${COLORS.yellow}`,
  "current-sm": `0 0 1px 1px currentColor`,

  "blue-darker-sm": `0 0 1px 1px ${COLORS["blue-darker"]}`,

  white: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.white}`,
  "white-sm": `0 0 1px 1px ${COLORS["white"]}`,
  "white-005-sm": `0 0 1px 1px ${COLORS["white-005"]}`,
  "white-01-sm": `0 0 1px 1px ${COLORS["white-01"]}`,
  "white-02-sm": `0 0 1px 1px ${COLORS["white-02"]}`,
  "white-04-sm": `0 0 1px 1px ${COLORS["white-04"]}`,
  "white-08-sm": `0 0 1px 1px ${COLORS["white-08"]}`,

  gray: `0 0 1px 1px ${COLORS.gray}, 0 0 1px 2px ${COLORS.white}`,
  "gray-01": `0 0 1px 1px ${COLORS["gray-01"]}, 0 0 1px 2px ${COLORS["white-01"]}`,
  "gray-02": `0 0 1px 1px ${COLORS["gray-02"]}, 0 0 1px 2px ${COLORS["white-02"]}`,
  "gray-04": `0 0 1px 1px ${COLORS["gray-04"]}, 0 0 1px 2px ${COLORS["white-04"]}`,
  "gray-sm": `0 0 1px 1px ${COLORS.gray}`,

  "light-sm": `0 0 4px 1px rgba(255,255,255,0.2)`,
  black: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.black}`,
  "black-005-sm": `0 0 1px 1px ${COLORS["black-005"]}`,
  "black-01-sm": `0 0 1px 1px ${COLORS["black-01"]}`,
  "black-sm": `0 0 1px 1px ${COLORS.black}`
};
