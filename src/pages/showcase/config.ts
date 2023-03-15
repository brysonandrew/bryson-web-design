export const SELECTED_PATH = "selected";

export const ITEM_HEIGHT = 66;

export const ITEM_DESCRIPTION_LOOKUP: Record<
  string,
  string
> = {
  AnimatedSpinningLoader: "Animated spinning loader",
  AnimatedViewButton: "Animated View Button",
  HoldToSkip: "HoldToSkip",
};

export type TMedia = {
  file: string;
  name: string;
  key: string;
};

export type TMediaRecord = Record<string, TMedia[]>

export const resolveMedia = (path: string): TMedia => {
  const parts = path.split("/");
  const count = parts.length;
  const file = parts[count - 1];
  const name = parts[count - 2];
  const key = `${name}-${file}`.toLowerCase();
  return { file, name, key };
};
