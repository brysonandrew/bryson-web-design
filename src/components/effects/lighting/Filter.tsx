import type { FC } from "react";
import type { TFilterProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";

export const Filter: FC<TFilterProps> = ({
  children,
  id,
  result = id,
  source = id,
}) => (
  <>
    <feSpecularLighting
      in={source ?? id}
      result="spotlight"
      specularConstant="1"
      specularExponent="80"
      lightingColor="#FFF"
    >
      <fePointLight x={WIDTH / 2} y={HEIGHT / 2} z="1000" />
    </feSpecularLighting>
    <feComposite
      in={source}
      in2="spotlight"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0"
    />
    {children ? children(result ?? id) : null}
  </>
);
