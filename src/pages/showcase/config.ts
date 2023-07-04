import { TItem } from "@t/showcase";
import { resolveCompositeKey } from "@utils/keys";

export const SELECTED_KEY = "selected";
export const IMG_KEY = "img";
export const OF_KEY = "of";

export const resolveTitleLayoutId = (key: string) => resolveCompositeKey('TITLE', key);

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

export const EMPTY_MEDIA = {
  img: "",
  file: "",
  name: "",
  key: "",
  src: ""
};

export const resolveEmptyMedia = (partial: Partial<TMedia>) => ({
  ...EMPTY_MEDIA,
  ...partial
});

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
