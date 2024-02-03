import { useViewport } from '@brysonandrew/viewport';
import { TRect } from '@brysonandrew/config/types/dom';
import { useMemo } from 'react';

type TConfig = {
  rect: TRect;
};
export const useScrollYBounds = ({ rect }: TConfig) => {
  const { height: windowHeight = 0 } = useViewport();
  const top = rect?.top ?? 0;

  const startScroll = useMemo(() => {
    const { top: bodyTop } =
      document.body.getBoundingClientRect();
    const result = Math.max(
      0,
      top - bodyTop - windowHeight,
    );
    return result;
  }, [top, windowHeight]);

  return { startScroll, windowHeight };
};
