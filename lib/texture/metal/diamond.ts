import { resolveGradient } from '@brysonandrew/color';
// <radial-gradient()> =
//   radial-gradient( [ <radial-gradient-syntax> ] )

// <radial-gradient-syntax> =
//   [ <radial-shape> || <radial-size> ]? [ at <position> ]? , <color-stop-list>

// <radial-shape> =
//   circle   |
//   ellipse

// <radial-size> =
//   <radial-extent>               |
//   <length [0,∞]>                |
//   <length-percentage [0,∞]>{2}

// <position> =
//   [ left | center | right | top | bottom | <length-percentage> ]  |
//   [ left | center | right ] && [ top | center | bottom ]  |
//   [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]  |
//   [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ]

// <color-stop-list> =
//   <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]#

// <radial-extent> =
//   closest-corner   |
//   closest-side     |
//   farthest-corner  |
//   farthest-side

// <length-percentage> =
//   <length>      |
//   <percentage>

// <linear-color-stop> =
//   <color> <length-percentage>?

// <linear-color-hint> =
//   <length-percentage>
const FADE_100_05 = 'hsla(0, 0%, 100%, 0.5)';
const TRANSPARENT = 'hsla(0, 0%, 0%, 0)';

const POSITIONS = [
  ['50% 0%', '8% 50%'],
  ['50% 100%', '12% 50%'],
  ['0% 50%', '50% 7%'],
  ['100% 50%', '50% 5%'],
] as const;

export const METAL_RADIAL_GRADIENT_DIAMOND = POSITIONS.map(
  (position) =>
    resolveGradient({
      name: 'radial-gradient',
      parts: [
        ...position,
        `${FADE_100_05} 0%`,
        `${TRANSPARENT} 100%`,
      ],
    })
).join(',');
