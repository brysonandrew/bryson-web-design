import type { FC, PropsWithChildren } from 'react';
import { useApp } from '@brysonandrew/app';

export const Shell: FC<
  PropsWithChildren<{ isHover?: boolean }>
> = ({ isHover, children }) => {
  const { LIGHT, COLOR } = useApp();

  if (LIGHT) {
    return (
      <LIGHT.Glow
        text={1}
        drop={2}
        initial={false}
        color={COLOR.white}
        animate={{ opacity: isHover ? 1 : 0.05 }}
      >
        <>{children}</>
      </LIGHT.Glow>
    );
  } else {
    return <>{children}</>;
  }
};
