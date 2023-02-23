import type { FC } from "react";
import { SWEEP_ID, SWEEP_RESULT } from "./config";

type TProps = {
  index: number;
};
export const Filter: FC<TProps> = ({ index }) => (
  <>
    <feImage
      result="rect"
      xlinkHref={`#${SWEEP_ID}-${index}`}
    />
    <feGaussianBlur
      stdDeviation="40 40"
      in="SourceGraphic"
      result="blur"
    />
    <feComposite
      in="blur"
      in2="rect"
      operator="in"
      result={`${SWEEP_RESULT}-${index}`}
    />
  </>
);
