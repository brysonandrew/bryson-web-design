/** @type {import('windicss').Config} */
const COLORS = require("./windi.config-colors.json");

module.exports = {
  "neu-black": `3px 3px 5px rgb(28 28 28 / 50%), -3px -3px 5px rgb(44 44 44 / 50%)`,

  "teal-md": `0 0 1px 1px ${COLORS.teal}, 0 0 1px 2px ${COLORS.teal}, 0 0 1px 3px ${COLORS.teal}`,
  "teal-02": `0 0 1px 1px ${COLORS["teal-02"]}, 0 0 1px 2px ${COLORS["teal-02"]}`,
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
};
