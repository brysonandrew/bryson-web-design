import { resolveFilter } from "../../resolveFilter";

export const DISABLED = resolveFilter({
  blur: 0,
  brightness: 90,
  grayscale: 0,
});

export const ACTIVE = resolveFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});

export const HIGHLIGHT = resolveFilter({
  blur: 0,
  brightness: 110,
  grayscale: 0,
});

export const INIT = resolveFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});

export const GRAYED_OUT = resolveFilter({
  blur: 0.1,
  brightness: 80,
  grayscale: 100,
});