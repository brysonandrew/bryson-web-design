import type { CSSProperties, FC } from "react";
import { GlitchPorsalin } from "./glitch-porsalin";
import { resolveUrlId } from "@utils/resolveUrlId";
import { ID } from "@components/effects/displacement";
import { STROKE_CLASS_NAMES } from "./glitch-porsalin/config";
import {
  LOGO_SUFFIX,
  TITLE_SUFFIX,
} from "@components/Filters";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { Sub } from "../Sub";
import { Desk } from "@components/icons/Desk";

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => (
  <>
    <div className="flex relative px-3 pt-2 pb-3 grow">
      <GlitchPorsalin
        offset={0.8}
        tag="div"
        classValues={STROKE_CLASS_NAMES}
      >
        <Desk
          width={44}
          height={44}
          fill="none"
          strokeWidth={8}
          filter={resolveUrlId(`${ID}_${LOGO_SUFFIX}`)}
        />
      </GlitchPorsalin>
      <div className="p-1.5" />
      <div className="flex flex-col">
        <GlitchPorsalin {...props} offset={0.6}>
          <span
            style={{
              position: "relative",
              left: 2,
              top: 2,
              width: "100%",
              fontSize: 19,
              filter: resolveUrlId(`${ID}_${TITLE_SUFFIX}`),
            }}
          >
            Andrew Bryson
          </span>
        </GlitchPorsalin>
        <div className="p-1"/>
        <Sub classValue="relative md:flex" style={{fontSize: 14}}>
          {EXPERIENCE_SLOGAN}
        </Sub>
      </div>
    </div>
  </>
);
