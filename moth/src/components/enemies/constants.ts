import { MOTH_NAME } from "@constants/index";

export const MOTH_SOURCE = {
  name: MOTH_NAME,
  width: 4,
  height: 4,
};
export const HERCULES_NAME = "hercules";
export const HERCULES = {
  xp: 1000,
  name: "hercules",
};
export const KOOLASUCHAS_NAME = "koolasuchas";
export const KOOLASUCHAS = {
  xp: 10000,
  name: KOOLASUCHAS_NAME,
};
export const ENEMY_RECORD = {
  hercules: HERCULES,
  koolasuchas: KOOLASUCHAS,
};

import { generateUUID } from "three/src/math/MathUtils";

export const BASE_ENEMY_CONFIG = {
  name: generateUUID(),
  width: 10,
  height: 10,
  x: 0,
  y: 0,
  xp: 10,
  instance: null,
};
