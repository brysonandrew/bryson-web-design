import { useEffect } from "react";
import type { TModule } from "@t/index";
import { resolveMedia } from "@pages/showcase/config";
import { useContext } from "@state/Context";
import { TImageRecord } from "@state/types";
const screenFiles = import.meta.glob("/screens/**/+([0-9]|!(*[a-z]*)[0-9]).png");

export const useMediaFromKey = () => {
  const { clientImageRecord, dispatch } = useContext();

  const handleLoad = async (selectedKey: string) => {
    const selectedRecord = clientImageRecord[selectedKey];
    const isEmpty = !Boolean(selectedRecord);
    const imageRecord: TImageRecord = isEmpty ? {} : { ...selectedRecord };
    for await (const entry of Object.entries(screenFiles)) {
      const [k, resolver] = entry;
      if (imageRecord[k]) continue;
      if (
        k.includes(`/${selectedKey}/`) &&
        !k.includes(`${selectedKey}/preview`)
      ) {
        const m = await resolver();
        let next = resolveMedia(k);
        next = {
          ...next,
          src: (m as TModule).default,
        };
        imageRecord[k] = next;
        if (isEmpty && Object.keys(imageRecord).length < 3) { // load first two
          dispatch({ type: "update-image-record", value: { [selectedKey]: imageRecord } });
        }
      }
    }

    dispatch({ type: "update-image-record", value: { [selectedKey]: imageRecord } });
  };

  return handleLoad;
};
