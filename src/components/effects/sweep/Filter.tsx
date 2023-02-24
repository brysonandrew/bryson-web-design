import type { FC } from "react";
import { SWEEP_ID, SWEEP_RESULT } from "./config";

type TProps = {
  index: number;
  source: string;
};
export const Filter: FC<TProps> = ({ index, source }) => (
  <>
    <feImage
      result={`rect-${index}`}
      xlinkHref={`#${SWEEP_ID}-${index}`}
    />
    <feGaussianBlur
      stdDeviation="40 40"
      in={source}
      result={`blur-${index}`}
    />
    <feComposite
      in={`blur-${index}`}
      in2={`rect-${index}`}
      operator="in"
      result={`${SWEEP_RESULT}-${index}`}
    />
  </>
);
