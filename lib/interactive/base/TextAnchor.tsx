import { TAnchorProps } from '@brysonandrew/config-types';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps;
export const TextAnchor: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <a
      className={clsx(
        'whitespace-nowrap title-main',
        classValue,
      )}
      {...resolveAccessibilityTitles(title)}

      {...props}
    >
      {children}
    </a>
  );
};
