import { type FC } from 'react';
import { useHover } from '@brysonandrew/motion-cursor/hooks/useHover';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';
import { BIG_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { TLinkMotionProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
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
  const { handlers } = useHover(BIG_CURSOR_KEY, title);

  return (
    <li
      className={cx(
        'relative pb-1.25 tracking-wide',
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
          {(title = title === 'Index' ? 'Home' : title)}
        </>
      )}
      {to && (
        <Link
          to={to}
          className="absolute -inset-1.25"
          {...(title
            ? resolveAccessibilityTitles(title)
            : {})}
          {...handlers}
          {...linkProps}
        />
      )}
    </li>
  );
};
