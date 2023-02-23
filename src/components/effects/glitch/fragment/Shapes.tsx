import type { FC } from "react";
import { Shape as FragmentShape } from "./Shape";
import { FRAGMENT_ARR } from "./config";

type TProps = { duration: number };
export const Shapes: FC<TProps> = ({ duration }) => (
  <>
    {FRAGMENT_ARR.map((_, index) => (
      <FragmentShape
        key={`${index}`}
        index={index}
        duration={duration * index}
      />
    ))}
  </>
);
