import { useRect } from '@brysonandrew/lib/hooks/dom/useRect';
import { TChildrenHandlerProps } from '@brysonandrew/lib/types/dom/main';
import { FC } from 'react';
type TChildrenProps = ReturnType<typeof useRect>;
type TProps = TChildrenHandlerProps<TChildrenProps>;

export const Rect: FC<TProps> = ({ children }) => {
  const rectReturn = useRect();
  return <>{children(rectReturn)}</>;
};
