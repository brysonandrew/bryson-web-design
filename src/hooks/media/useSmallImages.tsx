import { useEffect } from 'react';
import { useContext } from '@state/Context';
import { resolveCountRequired } from './resolveCountRequired';
import { TMediaRecord } from '@t/media';
import { resolveMediaRecords } from './resolveMediaRecords';
import { resolveRandomIndicies } from './resolveRandomIndicies';

export const useSmallImages = () => {
  const { screensLookupSmall } = useContext();
  const countRequired = resolveCountRequired();

  const {
    images: { length: count },
    dispatch,
  } = useContext();

  useEffect(() => {
    if (count !== countRequired) {
      const indicies = resolveRandomIndicies();

      const init = async () => {
        const value: TMediaRecord[] =
          await resolveMediaRecords({
            indicies,
            screensLookup: screensLookupSmall,
          });
        dispatch({ type: 'images', value });
      };
      init();
    }
  }, [count]);

  return countRequired;
};
