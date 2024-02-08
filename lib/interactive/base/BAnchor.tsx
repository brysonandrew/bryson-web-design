import {
  TAnchorProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { resolveInteractiveHrefLabels } from '@brysonandrew/utils-attributes/resolveInteractiveHrefLabels';
import clsx from 'clsx';
import { FC } from 'react';

export type TBAnchorProps = TAnchorProps &
  TInteractiveProps;
export const BAnchor: FC<TBAnchorProps> = (props) => {
  const {
    classValue,
    children,
    shape = 'interactive-rect',
    look,
    target = '_blank',
    ...rest
  } = props;
  return (
    <a
      type='button'
      target={target}
      className={clsx(
        'interactive',
        'neu-basic',
        look,
        shape,
        classValue,
      )}
      {...resolveInteractiveHrefLabels(props)}
      {...rest}
    >
      {children}
    </a>
  );
};
