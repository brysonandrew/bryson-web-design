import { useEffect } from 'react';
import { resolveRandomMediaRecord } from './resolveRandomMediaRecord';
import { useContext } from '@state/Context';
import { useWindowSize } from '@hooks/useWindowSize';

const MAX_COUNT = 10;

export const useSmallImages = () => {
  const windowSize = useWindowSize();
  const isResizing = windowSize?.isResizing;
  const windowWidth = windowSize?.width ?? 0;

  const {
    images: { length: count },
    dispatch,
  } = useContext();

  useEffect(() => {
    if (!isResizing && windowWidth > 0) {
      const countRequired = Math.min(
        MAX_COUNT,
        ~~(windowWidth / 100) + 3,
      );
      if (count !== countRequired) {
        const init = async () => {
          const value = await resolveRandomMediaRecord(
            countRequired,
          );
          dispatch({ type: 'images', value });
        };
        init();
      }
    }
  }, [isResizing, windowWidth, count]);
};
