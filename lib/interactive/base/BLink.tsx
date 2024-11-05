import {
  TInteractiveProps,
  TLinkProps,
} from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
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
      className={cx(
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
