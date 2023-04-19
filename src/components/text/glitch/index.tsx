import { Filter, ID } from "./Filter";

export type TFilterProps = {
  fontSize?: number;
  width?: number;
  height?: number;
  isActive?: boolean;
  textColor?: string;
  children: string;
  backgroundColor?: string;
  intensity?: number;
};
export const Glitch = (props: TFilterProps) => {
  const {
    width = 100,
    height = 100,
    backgroundColor = "#000",
    intensity = 1,
    isActive = true,
    textColor = "#fff",
    fontSize = 50,
    children
  } = props;
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <Filter
          backgroundColor={backgroundColor}
          intensity={intensity}
        />
      </defs>
      <g>
        <text
          x="0"
          y={height * 0.75}
          style={{
            filter: isActive ? `url(#${ID})` : "none",
            fill: textColor,
            fontSize,
            fontSmooth: "always",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          {children}
        </text>
      </g>
    </svg>
  );
};
