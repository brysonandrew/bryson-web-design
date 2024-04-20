import { formatFilter } from "@brysonandrew/css-format/filter";

export const DISABLED = formatFilter({
  blur: 0,
  brightness: 90,
  grayscale: 0,
});

export const ACTIVE = formatFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});

export const INIT = formatFilter({
  blur: 0,
  brightness: 100,
  grayscale: 0,
});

export const GRAYED_OUT = formatFilter({
  blur: 0.1,
  brightness: 80,
  grayscale: 100,
});