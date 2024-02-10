import {
  TInteractiveProps,
  TLinkProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type TProps = TLinkProps & TInteractiveProps;
export const BLink: FC<TProps> = ({
  classValue,
  look,
  shape = 'interactive-rect',
  children,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'interactive',
        look,
        shape,
        classValue,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
