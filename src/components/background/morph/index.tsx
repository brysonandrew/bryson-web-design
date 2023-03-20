import COLORS from "@windi/config-colors.json";

export const MORPH_ID = "MORPH_ID";

export const Morph = () => (
  <svg width="0" height="0">
    <filter
      id={MORPH_ID}
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feMorphology
        operator="dilate"
        radius="2.8 0"
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
    </filter>
  </svg>
);
