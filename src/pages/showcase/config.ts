export const SELECTED_KEY = "selected";
export const IMG_KEY = "img";

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
  img: string;
  file: string;
  name: string;
  key: string;
};

export type TMediaRecord = Record<string, TMedia[]>;

export const resolveMedia = (path: string): TMedia => {
  const [name, file] = path.split("/");
  const [img] = file.split(".");

  const key = `${name}-${img}`.toLowerCase();
  return { file, name, key, img };
};
