import { TClassValueProps } from '@brysonandrew/config-types';
import {
  useHover,
  CUSTOM_CURSOR_KEY,
} from '@brysonandrew/motion-cursor';
import { TextAnchor } from '@brysonandrew/interactive';
import { Copy } from '@brysonandrew/interactive/Copy';
import { TClipboardState } from '@brysonandrew/notifications';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes';
import clsx from 'clsx';
import { FC } from 'react';
import { OPEN_IN_NEW_ICON } from '@brysonandrew/icons-keys';

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
  const title = `Open ${name} client`;
  const { handlers } = useHover(
    CUSTOM_CURSOR_KEY,
    title,
    OPEN_IN_NEW_ICON,
    <div className='column-start'>
      <span className='text-xl'>{title}</span>
      {/* <span className='text-base'>(if nothing happens</span>
      <span className='text-base'>please check your</span>
      <span className='text-base'>browser settings)</span> */}
    </div>,
  );
  return (
    <li className={clsx('row gap-1', classValue)}>
      <TextAnchor
        target='_top'
        href={href}
        classValue='text-sm char-gap-4 md:text-lg lg:text-xl'
        {...resolveAccessibilityTitles(title)}
        {...handlers}
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
