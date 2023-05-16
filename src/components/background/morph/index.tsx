import COLORS from "@windi/config-colors.json";

export const MORPH_ID = "MORPH_ID";

export const Morph = () => (
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
      floodColor={COLORS["white-01"]}
      floodOpacity="0.8"
      result="flood"
    />
    <feComposite
      in="flood"
      in2="morphology"
      operator="atop"
      result="composite"
    />
  </filter>
);
