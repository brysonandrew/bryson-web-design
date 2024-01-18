import { MID_MOTION_CONFIG } from 'lib/animation/constants';
import { Placeholder } from '..';

export const Small = () => (
  <Placeholder
    classValue='origin-top placeholder'
    {...MID_MOTION_CONFIG}
  />
);
