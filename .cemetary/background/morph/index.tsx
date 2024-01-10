export const MORPH_ID = 'MORPH_ID';

export const Morph = () => (
  <filter
    id={MORPH_ID}
    x='0%'
    y='0%'
    width='100%'
    height='100%'
    filterUnits='objectBoundingBox'
    primitiveUnits='userSpaceOnUse'
    colorInterpolationFilters='sRGB'
  >
    <feMorphology
      operator='dilate'
      radius='2.8 0'
      in='SourceAlpha'
      result='MORPHOLOGY'
    />
    <feFlood
      floodColor='gray'
      result='FLOOD'
    />
    <feComposite
      in='FLOOD'
      in2='MORPHOLOGY'
      operator='atop'
      result='composite'
    />
  </filter>
);
