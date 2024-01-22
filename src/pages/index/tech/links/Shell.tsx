import type { FC, PropsWithChildren } from 'react';
import { useApp } from '@brysonandrew/app';

export const Shell: FC<
  PropsWithChildren<{ isHover?: boolean }>
> = ({ isHover, children }) => {
  const { Glow, COLOR } = useApp();

  if (Glow) {
    return (
      <Glow.Shell
        text={1}
        drop={2}
        initial={false}
        color={COLOR.white}
        animate={{ opacity: isHover ? 1 : 0.05 }}
      >
        <>{children}</>
      </Glow.Shell>
    );
  } else {
    return <>{children}</>;
  }
};
