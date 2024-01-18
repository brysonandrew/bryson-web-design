import { MID_MOTION_CONFIG } from 'lib/animation/constants';
import { Placeholder } from '..';

export const Responsive = () => (
  <Placeholder
    classValue='origin-center placeholder sm:+placeholder md:++placeholder'
    {...MID_MOTION_CONFIG}
  />
);
