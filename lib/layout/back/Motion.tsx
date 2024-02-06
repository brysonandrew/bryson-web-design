import { TBackMotionC } from '@brysonandrew/layout/back/config/types';
import { BlankMotion } from '@brysonandrew/layout/blank';
import clsx from 'clsx';

export const BackMotion: TBackMotionC = ({
  dark,
  ...props
}) => {
  const { classValue: darkClassValue, ...darkProps } =
    dark ?? props;
  const {
    positionClassValue = 'fill',
    classValue,
    ...rest
  } = props;
  return (
    <BlankMotion
      classValue={clsx(
        'bg-white',
        positionClassValue,
        classValue,
      )}
      dark={{
        className: clsx(
          'bg-black',
          positionClassValue,
          darkClassValue,
        ),
        ...darkProps,
      }}
      {...rest}
    />
  );
};
