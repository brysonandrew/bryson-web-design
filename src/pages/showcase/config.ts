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

export type TMediaRecord = Record<string, TMedia[]>;

export const resolveMedia = (path: string): TMedia => {
  const [name, file] = path.split("/");
  const key = `${name}-${file}`.toLowerCase();
  return { file, name, key };
};
