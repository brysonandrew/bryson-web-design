import type { CSSProperties, FC } from "react";
import { GlitchPorsalin } from "./glitch-porsalin";
import { Laptop } from "@components/icons/Laptop";
import { resolveUrlId } from "@utils/resolveUrlId";
import { ID } from "@components/effects/displacement";
import { STROKE_CLASS_NAMES } from "./glitch-porsalin/config";

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => {
  return (
    <div className="flex relative px-3 pt-2 pb-3 grow">
      <GlitchPorsalin
        offset={0.8}
        tag="div"
        classValues={STROKE_CLASS_NAMES}
      >
        <Laptop
          width={28}
          height={28}
          fill="none"
          strokeWidth={20}
          filter={resolveUrlId(ID)}
        />
      </GlitchPorsalin>
      <div className="p-1.5" />
      <div>
        <GlitchPorsalin {...props} offset={0.6}>
          <span
            style={{
              position: "relative",
              left: 2,
              top: 2,
              width: "100%",
              filter: resolveUrlId(ID),
            }}
          >
            Andrew Bryson
          </span>
        </GlitchPorsalin>
      </div>
    </div>
  );
};
