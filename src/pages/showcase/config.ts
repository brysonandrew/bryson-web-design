export const SELECTED_KEY = "selected";
export const IMG_KEY = "img";

export const ITEM_DESCRIPTION_LOOKUP: Record<
  string,
  string
> = {
  AnimatedSpinningLoader: "Animated spinning loader",
  AnimatedViewButton: "Animated View Button",
  HoldToSkip: "HoldToSkip",
};

export const EXCLUDED_KEYS = ["preview", "logo"]


export type TMedia = {
  img: string;
  file: string;
  name: string;
  key: string;
};

export type TMediaRecord = Record<string, TMedia[]>;

export const resolveMedia = (path: string): TMedia => {
  const parts = path.split("/");
  const [name, file] = parts.slice(-2);
  const [img] = file.split(".");

  const key = `${name}-${img}`.toLowerCase();
  return { file, name, key, img };
};
