import clsx from 'clsx';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { TLinkProps } from '@brysonandrew/config-types';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes';
import { I, TIConfigProps } from '@brysonandrew/icons-i';

export type TProps = TLinkProps &
  TIConfigProps & {
    onClick(): any;
    to: string;
  };
export const IconLink: FC<TProps> = ({
  iconConfig,
  classValue,
  title,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'absolute inset-0 center cursor-pointer z-10',
      )}
      {...resolveAccessibilityTitles(title)}
      {...props}
    >
      <I {...iconConfig} />
    </Link>
  );
};
