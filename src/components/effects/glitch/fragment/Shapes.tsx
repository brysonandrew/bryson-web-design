import type { FC } from "react";
import {
  Shape as FragmentShape,
  TFragmentShape,
} from "./Shape";

type TProps = { items: TFragmentShape[]; s: number };
export const Shapes: FC<TProps> = ({ items, s }) => (
  <>
    {items.map(
      (
        item: TFragmentShape,
        index,
        { length },
        duration = s / length,
      ) => (
        <FragmentShape
          key={`${index}`}
          index={index}
          duration={duration}
          delay={index * duration}
          {...item}
        />
      ),
    )}
  </>
);
