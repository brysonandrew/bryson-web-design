import { useWindowSize } from '@hooks/window/useWindowSize';
import { useContext } from '@state/Context';
import { TRect } from '@t/dom';
import { useMemo } from 'react';

type TConfig = {
  rect: TRect;
};
export const useScrollBounds = ({ rect }: TConfig) => {
  const { scrollY } = useContext();
  const { height: windowHeight } = useWindowSize();
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

  // useEffect(() => {
  //   rectConfig.onUpdateRect();
  // }, [startScroll]);

  return { scrollY, startScroll, windowHeight };
};
