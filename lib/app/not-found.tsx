import type { FC } from 'react';
import { NotFound } from '@brysonandrew/routes-not-found';
import type { TDivProps } from '@brysonandrew/config-types/dom';
import { useApp } from '@brysonandrew/app/AppProvider';

type TProps = TDivProps;
export const AppNotFound: FC<TProps> = (props) => {
  const {
    COLOR: { accent },
  } = useApp();
  return <NotFound pathnameColor={accent} />;
};
