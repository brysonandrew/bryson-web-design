import { TAnchorProps } from '@brysonandrew/config-types';
import { BAnchor } from '@brysonandrew/interactive';
import { Copy } from '@brysonandrew/interactive/Copy';
import { useClipboardState } from '@brysonandrew/notifications';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps;
export const Item: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  const { handler } = useClipboardState();
  return (
    <li className={clsx('row', classValue)}>
      <BAnchor target='_top' {...props}>
        {children}
      </BAnchor>
      {typeof children === 'string' && (
        <Copy
          handler={handler}
          title={'xx'}
          value={children}
        />
      )}
    </li>
  );
};
