import { DEFAULT_EXT } from "@constants/media";
import { TExtKey, TMedia, TMediaDetails, TMediaRecord, TModuleConfig, TModuleRecord } from "@t/media";
import { TItem } from "@t/projects";
import { TModule } from "@t/screens";
import { resolveCompositeKey } from "@utils/keys";

export const SOURCE_KEY = "source";
export const NAME_KEY = "name";

export const resolveTitleLayoutId = (key: string) => resolveCompositeKey('TITLE', key);

export const EXCLUDED_KEYS = ["preview", "logo"];

export type TSlugProps = Pick<TItem, 'slug'>;

export const EMPTY_MEDIA: TMedia = {
  key: "",
  source: "",
  name: "",
  file: "",
  src: "",
  ext: DEFAULT_EXT
};

export const resolveEmptyMedia = (partial: Partial<TMedia>) => ({
  ...EMPTY_MEDIA,
  ...partial
});

export const resolveLoadingItemKey = (index: number) => resolveCompositeKey('loading', index);

export const resolveMediaDetails = (
  filePath: string,
): TMediaDetails => {
  const parts = filePath.split("/");
  const [source, file] = parts.slice(-2);
  const [name, tail] = file.split(".");
  const ext = tail as TExtKey;

  const key = `${source}-${name}`.toLowerCase();

  return { file, source, key, name, ext };
};

export const resolveMedia = async ({ filePath, resolver }: TModuleConfig) => {
  const module = await resolver() as TModule;
  return {
    ...resolveMediaDetails(filePath),
    src: module.default
  };
};

export const resolveMediaRecord = async (
  { png, webp }: TModuleRecord,
) => ({
  png: await resolveMedia(png),
  webp: await resolveMedia(webp),
});
