import type { FC } from 'react';
import { TButtonProps } from '@brysonandrew/config-types';
import { WorkBackground } from '@pages/_dev/work/background';

type TProps = TButtonProps & {
  Background?: FC;
};
export const WorkButton: FC<TProps> = ({
  children,
  Background = WorkBackground,
  ...props
}) => {
  return (
    <button
      className="center relative w-10 h-10 shrink-0 group disabled:cursor-not-allowed disabled:opacity-20"
      {...props}
    >
      <Background />
      <span className="relative">{children}</span>
    </button>
  );
};
