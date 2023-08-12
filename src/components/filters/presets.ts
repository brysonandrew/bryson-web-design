import { resolveFilter } from "./resolveFilter";

export const DISABLED = resolveFilter({
  blur: 0,
  brightness: 60,
  grayscale: 60,
});

export const DISTANT = resolveFilter({
  blur: 10,
  brightness: 60,
  grayscale: 60,
});

export const ACTIVE = resolveFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});

export const HIGHLIGHT = resolveFilter({
  blur: 0,
  brightness: 140,
  grayscale: 0,
});

export const INIT = resolveFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});