import { cx } from 'class-variance-authority';
import { TBackC } from '@brysonandrew/layout-back/config/types';
import { Blank } from '@brysonandrew/layout-blank';

export const Back: TBackC = ({ dark, ...props }) => {
  const { positionClassValue, ...sharedProps } = props;
  const { classValue: darkClassValue, ...darkProps } =
    dark ?? sharedProps;
  const { classValue, ...rest } = sharedProps;

  return (
    <Blank
      classValue={cx(
        'bg-white',
        positionClassValue,
        classValue,
      )}
      dark={{
        classValue: cx(
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

export * from './Blur';
export * from './Fill';
export * from './Screen';
export * from './config/types';
export * from './motion/Blur';
export * from './motion/Fill';
export * from './motion';
