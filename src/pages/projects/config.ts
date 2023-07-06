import { TItem } from "@t/projects";
import { resolveCompositeKey } from "@utils/keys";

export const SOURCE_KEY = "source";
export const NAME_KEY = "name";

export const resolveTitleLayoutId = (key: string) => resolveCompositeKey('TITLE', key);

export const EXCLUDED_KEYS = ["preview", "logo"];

export type TResolver = () => Promise<any>;

export type TMediaDetails = {
  key: string;
  source: string;
  file: string;
  name: string;
  ext: string;
};

export type TMedia = TMediaDetails & {
  src: string;
};

export const DEFAULT_EXT = "png";

export type TMediaRecord = {
  webp?: TMedia;
  [DEFAULT_EXT]: TMedia;
};

export const EMPTY_MEDIA: TMedia = {
  key: "",
  source: "",
  name: "",
  file: "",
  src: "",
  ext: ""
};

export const resolveEmptyMedia = (partial: Partial<TMedia>) => ({
  ...EMPTY_MEDIA,
  ...partial
});

export const resolveLoadingItemKey = (index: number) => resolveCompositeKey('loading', index);

export const resolveMedia = (
  src: string,
): TMedia => {
  const parts = src.split("/");
  const [source, file] = parts.slice(-2);
  const [name, ext] = file.split(".");

  const key = `${source}-${name}`.toLowerCase();
  return { file, source, key, name, src, ext };
};

export type TSlugProps = Pick<TItem, 'slug'>;
