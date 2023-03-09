
export const Glow1 = () => (
  <filter
    id="R"
    x="-20%"
    y="-20%"
    width="140%"
    height="140%"
    filterUnits="objectBoundingBox"
    primitiveUnits="userSpaceOnUse"
    colorInterpolationFilters="linearRGB"
  >
    <feComposite
      in="SourceAlpha"
      in2="SourceAlpha"
      operator="arithmetic"
      k1="0"
      k2="8"
      k3="-0.5"
      k4="-0.5"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      result="composite"
    />
    <feColorMatrix
      type="matrix"
      values="1 0 0 0 1
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      in="composite"
      result="colormatrix1"
    />
    <feMorphology
      operator="dilate"
      radius="10 10"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      in="colormatrix1"
      result="morphology1"
    />
    <feGaussianBlur
      stdDeviation="10 10"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      in="morphology1"
      edgeMode="none"
      result="blur2"
    />
    <feComposite
      in="blur2"
      in2="composite"
      operator="out"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      result="composite2"
    />
    <feMerge
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      result="merge"
    >
      <feMergeNode in="composite2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);
