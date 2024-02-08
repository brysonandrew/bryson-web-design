import { Back } from '@brysonandrew/layout-back';
import { TBackC } from '@brysonandrew/layout-back/config/types';

export const BackScreen: TBackC = ({
  classValue,
  ...props
}) => {
  return (
    <Back positionClassValue='fill-screen' {...props} />
  );
};
