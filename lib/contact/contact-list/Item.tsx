import { TClassValueProps } from '@brysonandrew/config-types';
import { TextAnchor } from '@brysonandrew/interactive';
import { Copy } from '@brysonandrew/interactive/Copy';
import { TClipboardState } from '@brysonandrew/notifications';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & {
  name: string;
  clipboardState: TClipboardState;
  href: string;
  children: string;
  isCopy?: boolean;
};
export const Item: FC<TProps> = ({
  name,
  href,
  classValue,
  clipboardState,
  isCopy,
  children,
  ...props
}) => {
  return (
    <li className={clsx('row', classValue)}>
      <TextAnchor 
        target='_top'
        href={href}
        title={children}
        classValue="text-sm lg:text-xl"
        {...props}
      >
        {children}
      </TextAnchor>
      {isCopy && (
        <Copy
          handler={clipboardState.handler}
          title={name}
          value={children}
        />
      )}
    </li>
  );
};
