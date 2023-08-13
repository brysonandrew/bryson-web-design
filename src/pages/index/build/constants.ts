import {
  MAX_SCROLL,
  TFake3DOptions,
} from '@components/fake-3d/config';
import { RANGE_Y } from './images/hooks/useY';
const START_Y = -60;

export const FAKE_3D_PROPS: TFake3DOptions = {
  dispersion: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 2,
    ],
    output: [0, -20],
  },
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [START_Y, START_Y - RANGE_Y],
  },
  visibility: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 2,
    ],
    opacity: [1, 0],
  },
};
