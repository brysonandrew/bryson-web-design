import { TUpdateRectProps } from "@components/InView";
import { useWindowSize } from "@hooks/useWindowSize";
import { useContext } from "@state/Context";
import { useMemo, useEffect } from "react";

type TConfig = {
  rectConfig: TUpdateRectProps;
};
export const useScrollBounds = ({ rectConfig }: TConfig) => {
  const { scrollY } = useContext();
  const windowSize = useWindowSize();
  const top = rectConfig.rect.top ?? 0;
  const windowHeight = windowSize?.height ?? 0;

  const startScroll = useMemo(() => {
    const { top: bodyTop } =
      document.body.getBoundingClientRect();
    const result = Math.max(
      0,
      top - bodyTop - windowHeight,
    );
    return result;
  }, [top, windowHeight]);

  useEffect(() => {
    rectConfig.onUpdateRect();
  }, [startScroll]);

  return { scrollY, startScroll, windowHeight };
};