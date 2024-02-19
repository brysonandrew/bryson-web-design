import { type FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';
import { DURATION } from '@app/animation';
import { ThickLine } from '@brysonandrew/layout-line/ThickLine';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { TLinkMotionProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { useApp } from '@brysonandrew/app';
import { Link } from 'react-router-dom';

export type TItemProps = Partial<TLinkMotionProps> & {
  isActive?: boolean;
  layoutId?: string;
};
export const Item: FC<TItemProps> = ({
  isActive,
  title,
  layoutId,
  children,
  to,
  ...linkProps
}) => {
  const { COLOR } = useApp();
  const { handlers } = useHoverKey(BIG_CURSOR_KEY, title);

  return (
    <li
      className={clsx(
        'relative pb-4',
        isActive ? 'title-header-active' : 'title-header',
      )}
      style={{
        ...(isActive
          ? {
              color: COLOR.accent,
            }
          : {}),
      }}
    >
      {children ?? (
        <>
          {title}
          {isActive && (
            <ThickLine
              classValue='top-3/4 w-full'
              layoutId={layoutId}
              transition={{ duration: DURATION * 2 }}
            />
          )}
        </>
      )}
      {to && (
        <Link
          to={to}
          className='absolute -inset-1.25'
          {...(title
            ? resolveInteractiveLabels(title)
            : {})}
          {...handlers}
          {...linkProps}
        />
      )}
    </li>
  );
};
