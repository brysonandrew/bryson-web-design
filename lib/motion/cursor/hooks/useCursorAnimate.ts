import { useCursor } from '@brysonandrew/motion-cursor';
import {
  ValueAnimationTransition,
  animate,
} from 'framer-motion';
import { TSign } from './useCursorOffset';
import { useEffect, useRef } from 'react';
import {
  CUSTOM_CURSOR_KEY,
  resolveCursorKeyFromHover,
  THoverKey,
} from '@brysonandrew/motion-cursor/config/constants';
import { TAnimationControlsPoint } from '@brysonandrew/motion-config-types';
import { resolveCalc } from '@brysonandrew/motion-cursor/utils/calc';

export const LABEL_SIZE = 280;
const OFFSET = 20;

const ANIMATION_OPTIONS: ValueAnimationTransition = {
  type: 'tween',
};

type THandlerConfig = {
  nextHover?: THoverKey;
  nextSignX?: TSign;
  nextSignY?: TSign;
};
export const useCursorAnimate = () => {
  const { offsetRef, hoverKey, cursorLabel } = useCursor();

  const animateRef = useRef<
    Partial<TAnimationControlsPoint>
  >({});

  const handler = ({
    nextHover = hoverKey,
    nextSignX = offsetRef.current.x,
    nextSignY = offsetRef.current.y,
  }: THandlerConfig = {}) => {
    const cursorKey =
      resolveCursorKeyFromHover(nextHover);

    const zeroX = resolveCalc(0, nextSignX, 0);
    const zeroY = resolveCalc(0, nextSignY, 0);

    let labelXValue = zeroX;
    let labelYValue = zeroY;

    if (cursorKey === CUSTOM_CURSOR_KEY) {
      const percentX = nextSignX < 0 ? -100 : 0;
      const percentY = nextSignY < 0 ? -100 : 0;

      labelXValue = resolveCalc(
        percentX,
        nextSignX,
        OFFSET,
      );
      labelYValue = resolveCalc(
        percentY,
        nextSignY,
        OFFSET,
      );
    }

    animateRef.current.x = animate(
      cursorLabel.x,
      labelXValue,
      ANIMATION_OPTIONS,
    );
    animateRef.current.y = animate(
      cursorLabel.y,
      labelYValue,
      ANIMATION_OPTIONS,
    );
  };

  useEffect(() => {
    return () => {
      if (animateRef.current.x) {
        animateRef.current.x.stop();
      }
      if (animateRef.current.y) {
        animateRef.current.y.stop();
      }
    };
  }, []);

  return handler;
};
