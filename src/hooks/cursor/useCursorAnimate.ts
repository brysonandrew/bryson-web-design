import {
  TIP_CURSOR_KEYS,
  TTipCursorKey,
  resolveCursorKeyFromHoverKey,
} from '@components/select/config';
import { useContext } from '@state/Context';
import {
  ValueTarget,
  ValueAnimationTransition,
  animate,
  AnimationPlaybackControls,
} from 'framer-motion';
import { useRef } from 'react';
import { TSign } from './useCursorOffset';
import { THoverKey } from './config';

// if (!cursorX.isAnimating()) {

// animate(cursorX, nextX, { duration: 0.1 });

// if (x !== offsetXRef.current) {
//   animate(cursorX, nextX, { duration: 1 });
//   offsetXRef.current = x;
// } else {

// }
// }
// const animateY = animate(
//   cursorY,
//   nextY + y * OFFSET,
//   {
//     duration: 0.1,
//   },
// );
// if (y !== offsetYRef.current) {
//   offsetYRef.current = y;
// } else {
// }

export const LABEL_SIZE = 280;
const OFFSET = 40;

const resolveCalc = (
  percent: number,
  sign: TSign,
  px: number,
): ValueTarget =>
  `calc(${percent}% ${sign < 0 ? '-' : '+'} ${px}px)`;

const ANIMATION_OPTIONS: ValueAnimationTransition = {
  // duration: 0.2,
  // ease: 'linear',
  type: 'tween',
};

type THandlerConfig = {
  nextHoverKey?: THoverKey;
  nextSignX?: TSign;
  nextSignY?: TSign;
};

type TAnimateControls = {
  x: null | AnimationPlaybackControls;
  y: null | AnimationPlaybackControls;
};

export const useCursorAnimate = () => {
  const {
    offsetRef,
    hoverKey,
    cursorX,
    cursorY,
    cursorLabelX,
    cursorLabelY,
    scrollX,
    scrollY,
    isCursorReady,
    dispatch,
  } = useContext();

  const animationRef = useRef<TAnimateControls>({
    x: null,
    y: null,
  });
  const handler = ({
    nextHoverKey = hoverKey,
    nextSignX = offsetRef.current.x,
    nextSignY = offsetRef.current.y,
  }: THandlerConfig = {}) => {
    const cursorKey =
      resolveCursorKeyFromHoverKey(nextHoverKey);

    const ZERO_X = resolveCalc(0, nextSignX, 0);
    const ZERO_Y = resolveCalc(0, nextSignY, 0);

    let labelXValue: ValueTarget = ZERO_X;
    let labelYValue: ValueTarget = ZERO_Y;

    if (
      TIP_CURSOR_KEYS.includes(cursorKey as TTipCursorKey)
    ) {
      const percentX = nextSignX < 0 ? -100 : 0;
      const percentY = nextSignY < 0 ? -100 : 0;

      labelXValue = //`${percentX}px`;
        resolveCalc(percentX, nextSignX, OFFSET);
      labelYValue = //`${percentY}px`;
        resolveCalc(percentY, nextSignY, OFFSET);
    }

    console.log('animate');
    console.log(cursorKey);

    console.log('animate labelY');
    console.log(labelYValue);
    // animationRef.current.y?.stop();
    // animationRef.current.y?.cancel();
    animate(cursorLabelY, labelYValue, ANIMATION_OPTIONS);

    console.log('animate labelX');
    console.log(labelXValue);

    animate(cursorLabelX, labelXValue, ANIMATION_OPTIONS);
  };

  return handler;
};
