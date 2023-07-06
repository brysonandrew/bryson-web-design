import type { TModule } from "@t/index";
import { resolveMedia } from "@pages/showcase/config";
import { useContext } from "@state/Context";
import { TImageRecord } from "@state/types";

type TUpdateRecord = { currSource: string, nextRecord: TImageRecord; };
export const useMediaFromKey = () => {
  const { clientImageRecord, screensRecord, dispatch } = useContext();

  const updateRecord = ({ currSource, nextRecord }: TUpdateRecord) => {
    const prev = clientImageRecord[currSource];
    dispatch({
      type: "image-record", value: {
        [currSource]: {
          ...prev,
          ...nextRecord
        }
      }
    });
  };

  const handleLoad = async (currSource: string) => {
    try {
      const entries = Object.entries(screensRecord);
      const selectedRecord = clientImageRecord[currSource];
      const isEmpty = !Boolean(selectedRecord) || Object.keys(selectedRecord).length === 0;
      const imageRecord: TImageRecord = isEmpty ? {} : { ...selectedRecord };
      const nextRecord: TImageRecord = {};

      for await (const entry of entries) {
        const [longKey, resolver] = entry;
        if (imageRecord[longKey]) continue;
        if (
          longKey.includes(`/${currSource}/`)
        ) {
          const m = await resolver();
          let next = resolveMedia(longKey);
          next = {
            ...next,
            src: (m as TModule).default,
          };
          nextRecord[next.name] = {
            ...(nextRecord[next.name] ?? {}),
            [next.ext]: next
          };

          if (isEmpty && Object.keys(nextRecord).length < 3) { // load first two
            updateRecord({ currSource, nextRecord });
          }
        }
      }

      if (Object.keys(nextRecord).length > 0) {
        updateRecord({ currSource, nextRecord });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return handleLoad;
};
