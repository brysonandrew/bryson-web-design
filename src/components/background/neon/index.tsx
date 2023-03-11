import COLORS from "@windi/config-colors.json";

export const NEON_ID = "NEON_ID";
const BASE_ANIMATION = {
  repeatCount: "indefinite",
  dur: "2s",
};

export const Neon = () => (
  <svg width="0" height="0">
    <filter
      id={NEON_ID}
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        type="turbulence"
        // type="fractalNoise"
        baseFrequency="4"
        numOctaves="10"
        seed="2"
        stitchTiles="stitch"
        result="turbulence"
      />
      <feColorMatrix
        type="saturate"
        values="2"
        in="turbulence"
        result="colormatrix1"
      />
      <feMorphology
        operator="dilate"
        radius="2 0"
        in="SourceAlpha"
        result="morphology"
      />
      <feFlood
        floodColor={COLORS["teal"]}
        floodOpacity="0.2"
        result="flood"
      />
      <feComposite
        in="flood"
        in2="morphology"
        operator="atop"
        result="composite"
      />
      <feComposite
        in="composite"
        in2="SourceAlpha"
        operator="out"
        result="composite1"
      />
      <feComposite
        in="colormatrix1"
        in2="composite1"
        operator="lighter"
        result="composite2"
      />
    </filter>
  </svg>
);
