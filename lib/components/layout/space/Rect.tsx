import { useRect } from 'lib/hooks/dom/useRect';
import { TChildrenHandlerProps } from 'lib/types/dom/main';
import { FC } from 'react';
type TChildrenProps = ReturnType<typeof useRect>;
type TProps = TChildrenHandlerProps<TChildrenProps>;

export const Rect: FC<TProps> = ({ children }) => {
  const rectReturn = useRect();
  return <>{children(rectReturn)}</>;
};
