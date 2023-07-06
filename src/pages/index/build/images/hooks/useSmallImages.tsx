import { useEffect } from 'react';
import { resolveRandomMediaRecord } from './resolveRandomMediaRecord';
import { useContext } from '@state/Context';
import { useWindowSize } from '@hooks/useWindowSize';

const MAX_COUNT = 10;

export const useSmallImages = () => {
  const windowSize = useWindowSize();
  const isResizing = windowSize?.isResizing;
  const countRequired = Math.min(
    MAX_COUNT,
    ~~((windowSize?.width ?? 0) / 100),
  );
  const { dispatch } = useContext();

  useEffect(() => {
    if (!isResizing && countRequired > 0) {
      const init = async () => {
        const value = await resolveRandomMediaRecord(
          countRequired,
        );

        dispatch({ type: 'images', value });
      };
      init();
    }
  }, [isResizing, countRequired]);
};
