import { resolveMedia } from "@pages/showcase/config";
import { TImageRecord } from "@state/types";
import { TModule } from "@t/index";

const screensRecordSmall = import.meta.glob(
  "/screens/**/+([0-9]|!(*[a-z]*)[0-9]) Small.png",
);
const screensRecordSmallWebp = import.meta.glob(
  "/screens/**/+([0-9]|!(*[a-z]*)[0-9]) Small.webp",
);
const MAX_COUNT = 9;
const entries = Object.entries(screensRecordSmall);
const count = entries.length;

export const resolveRandomMediaRecord = async () => {
  const indicies: number[] = [];
  const requiredCount = Math.min(count, MAX_COUNT);
  while (indicies.length < requiredCount) {
    const next = ~~(count * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }
  const record: TImageRecord = {};

  for await (const index of indicies) {
    const [key, value] = entries[index];
    const next = await value() as TModule;

    const webpKey = key.replace("png", "webp");
    const webpValue = screensRecordSmallWebp[webpKey];
    const webpNext = await webpValue() as TModule;

    const media = resolveMedia(next.default);
    const webpMedia = resolveMedia(webpNext.default);

    record[media.src] = {
      ...(record[media.src] ?? {}),
      [media.ext]: media,
      webp: webpMedia
    };
  }

  return Object.values(record);
};
