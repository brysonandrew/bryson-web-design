import { BackMotion } from '@brysonandrew/layout/back';
import { TBackMotionC } from '@brysonandrew/layout/back/config/types';

export const BackFillMotion: TBackMotionC = ({
  classValue,
  ...props
}) => {
  return (
    <BackMotion positionClassValue='fill' {...props} />
  );
};
