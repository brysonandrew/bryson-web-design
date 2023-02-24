import type { FC } from "react";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";
import { Filter } from "./Filter";

export const ID = "LightingId";

export const Lighting: FC<
  TFilterChildrenProps<typeof ID>
> = ({ children, external }) => (
  // const glitch = resolveRandomGlitch();
  // const [currGlitch, setGlitch] = useState(glitch);

  // useInterval(() => {
  //   const glitch = resolveRandomGlitch();
  //   setGlitch(glitch);
  // }, (currGlitch.duration + currGlitch.delay) * 1000);

  // const baseFrequency = currGlitch.duration * 0.1;
  <>
    <filter
      id={ID}
      x={0}
      y={0}
      height={HEIGHT}
      width={WIDTH}
      filterUnits="userSpaceOnUse"
    >
      <Filter id={ID} source="SourceGraphic" />
      {children ? children(ID) : null}
    </filter>
    {external ? external(ID) : null}
  </>
);
