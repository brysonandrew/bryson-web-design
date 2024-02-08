import { TLinkProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type TProps = TLinkProps;
export const TextLink: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'whitespace-nowrap text-light-blue',
        classValue,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
