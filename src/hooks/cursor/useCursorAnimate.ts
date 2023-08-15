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
} from 'framer-motion';
import { TSign } from './useCursorOffset';
import { THoverKey } from './config';

export const LABEL_SIZE = 280;
const OFFSET = 20;

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
export const useCursorAnimate = () => {
  const {
    offsetRef,
    hoverKey,
    cursorLabelX,
    cursorLabelY,
  } = useContext();

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
    animate(cursorLabelY, labelYValue, ANIMATION_OPTIONS);
    animate(cursorLabelX, labelXValue, ANIMATION_OPTIONS);
  };

  return handler;
};
