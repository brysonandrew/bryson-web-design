import { resolveUrlId } from "@utils/resolveUrlId";
import { FILTER_ID } from "./constants";

export const Text = () => (
  <g
    className="displacement"
    filter={resolveUrlId(FILTER_ID)}
  >
    <svg width="100%" height="100%" viewBox="0 0 800 400">
      <rect width="100%" height="100%" fill="transparent" />
      <text
        className="corben"
        y="50%"
        x="50%"
        textAnchor="middle"
        letterSpacing="-.09em"
      >
        Jelly Drip
      </text>
    </svg>
  </g>
);
