import { TProjectKey } from "@constants/projects";
import { useContext } from "@state/Context";
import { TImageRecord } from "@t/screens";

type TUpdateRecord = { currProject: TProjectKey, nextRecord: TImageRecord; };
export const useMediaFromKey = () => {
  const { projectImageRecord, screensLookup, dispatch } = useContext();

  const updateRecord = ({ currProject, nextRecord }: TUpdateRecord) => {
    const prev = projectImageRecord[currProject];
    dispatch({
      type: "project-image-record", value: {
        [currProject]: {
          ...prev,
          ...nextRecord
        }
      }
    });
  };

  const handleLoad = async (currProject: TProjectKey) => {
    try {
      const entries = Object.entries(screensLookup.png);
      const selectedRecord = projectImageRecord[currProject];
      const isEmpty = !Boolean(selectedRecord) || Object.keys(selectedRecord).length === 0;
      const imageRecord: TImageRecord = isEmpty ? {} : { ...selectedRecord };
      const nextRecord: TImageRecord = {};

      for await (const entry of entries) {
        const [filePath, resolver] = entry;
        if (imageRecord[filePath]) continue;
        if (
          filePath.includes(`/${currProject}/`)
        ) {
          // const mediaRecord = await resolveMediaRecord({ png: { filePath, resolver }, webp: { filePath, resolver: screensLookup.webp[filePath] } });
          // nextRecord[mediaRecord.png.name] = mediaRecord;

          // if (isEmpty && Object.keys(nextRecord).length < 3) {
          //   updateRecord({ currProject, nextRecord });
          // }
        }
      }

      // if (Object.keys(nextRecord).length > 0) {
      //   updateRecord({ currProject, nextRecord });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return handleLoad;
};
