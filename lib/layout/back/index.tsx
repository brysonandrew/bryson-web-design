import { TBackC } from '@brysonandrew/layout-back/config/types';
import { Blank } from '@brysonandrew/layout-blank';
import clsx from 'clsx';

export const Back: TBackC = ({ dark, ...props }) => {
  const { positionClassValue, ...sharedProps } = props;
  const { classValue: darkClassValue, ...darkProps } =
    dark ?? sharedProps;
  const { classValue, ...rest } = sharedProps;

  return (
    <Blank
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

export * from './Blur';
export * from './Fill';
export * from './FillMotion';
export * from './Motion';
export * from './Screen';
export * from './config/types';
