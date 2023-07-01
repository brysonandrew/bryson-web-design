import { TItem } from "@t/showcase";
import { resolveCompositeKey } from "@utils/keys";

export const SELECTED_KEY = "selected";
export const IMG_KEY = "img";

export const resolveFillMetalLayoutId = (key: string) => resolveCompositeKey("FILL_DARKEST_LAYOUT_KEY", key);
export const resolveTitleLayoutId = (key: string) => resolveCompositeKey('TITLE', key);
export const ITEM_DESCRIPTION_LOOKUP: Record<
  string,
  string
> = {
  AnimatedSpinningLoader: "Animated spinning loader",
  AnimatedViewButton: "Animated View Button",
  HoldToSkip: "HoldToSkip",
};

export const EXCLUDED_KEYS = ["preview", "logo"];

export type TResolver = () => Promise<any>;

export type TMediaDetails = {
  img: string;
  file: string;
  name: string;
  key: string;
};

export type TMedia = TMediaDetails & {
  src: string;
};

export type TMediaRecord = Record<string, TMedia[]>;

export const resolveMedia = (
  src: string,
): TMedia => {
  const parts = src.split("/");
  const [name, file] = parts.slice(-2);
  const [img] = file.split(".");

  const key = `${name}-${img}`.toLowerCase();
  return { file, name, key, img, src };
};

export type TSlugProps = Pick<TItem, 'slug'>;
