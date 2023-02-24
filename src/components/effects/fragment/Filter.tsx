import type { FC } from "react";
import {
  FRAGMENT_ID,
  FRAGMENT_PREFIX,
  FRAGMENT_RESULT,
} from "./config";

type TProps = {
  index: number;
};
export const Filter: FC<TProps> = ({ index }) => {
  const dx = Math.random() * 100;
  const dy = Math.random() * 100;

  return (
    <>
      <feImage
        result="rect"
        xlinkHref={`#${FRAGMENT_ID}-${index}`}
      />
      <feGaussianBlur
        stdDeviation="40 0"
        in="SourceGraphic"
        result={`${FRAGMENT_PREFIX}-${index}-blur`}
      />
      <feOffset
        dx={dx}
        dy={dy}
        in={`${FRAGMENT_PREFIX}-${index}-blur`}
        result={`${FRAGMENT_PREFIX}-${index}-offset`}
      />
      <feComposite
        in={`${FRAGMENT_PREFIX}-${index}-offset`}
        in2="rect"
        operator="in"
        result={`${FRAGMENT_RESULT}-${index}`}
      />
    </>
  );
};
