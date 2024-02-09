import { TClassValueProps } from '@brysonandrew/config-types';
import { BAnchor } from '@brysonandrew/interactive';
import { Copy } from '@brysonandrew/interactive/Copy';
import { TClipboardState } from '@brysonandrew/notifications';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & {
  name: string;
  clipboardState: TClipboardState;
  href: string;
  children: string;
};
export const Item: FC<TProps> = ({
  name,
  href,
  classValue,
  clipboardState,
  children,
  ...props
}) => {
  return (
    <li className={clsx('row', classValue)}>
      <BAnchor
        target='_top'
        href={href}
        title={children}
        {...props}
      >
        {children}
      </BAnchor>
      <Copy
        handler={clipboardState.handler}
        title={name}
        value={children}
      />
    </li>
  );
};
