import type { TModule } from "@t/index";
import { resolveMedia } from "@pages/showcase/config";
import { useContext } from "@state/Context";
import { TImageRecord } from "@state/types";
const screenFiles = import.meta.glob("/screens/**/+([0-9]|!(*[a-z]*)[0-9]).png");

type TUpdateRecord = { key: string, nextRecord: TImageRecord; };
export const useMediaFromKey = () => {
  const { clientImageRecord, dispatch } = useContext();

  const updateRecord = ({ key, nextRecord }: TUpdateRecord) => {
    const prev = clientImageRecord[key];
    dispatch({
      type: "image-record", value: {
        [key]: {
          ...prev,
          ...nextRecord
        }
      }
    });
  };

  const handleLoad = async (selectedKey: string) => {
    try {
      const selectedRecord = clientImageRecord[selectedKey];
      const isEmpty = !Boolean(selectedRecord) || Object.keys(selectedRecord).length === 0;
      const imageRecord: TImageRecord = isEmpty ? {} : { ...selectedRecord };
      const nextRecord: TImageRecord = {};

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
          nextRecord[k] = next;
          if (isEmpty && Object.keys(nextRecord).length < 3) { // load first two
            updateRecord({ key: selectedKey, nextRecord });
          }
        }
      }

      if (Object.keys(nextRecord).length > 0) {
        updateRecord({ key: selectedKey, nextRecord });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return handleLoad;
};
