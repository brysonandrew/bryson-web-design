import { TBackMotionC } from '@brysonandrew/layout-back/config/types';
import { BlankMotion } from '@brysonandrew/layout-blank';
import { cx } from 'class-variance-authority';

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
      classValue={cx(
        'bg-white',
        positionClassValue,
        classValue,
      )}
      dark={{
        className: cx(
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
