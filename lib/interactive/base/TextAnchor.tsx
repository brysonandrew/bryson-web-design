import { TAnchorProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps;
export const TextAnchor: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <a
      className={clsx(
        'whitespace-nowrap text-light-blue',
        classValue,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
