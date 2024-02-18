import type { FC, PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const HeadHelmetProvider: FC<PropsWithChildren> = ({
  children,
}) => <HelmetProvider>{children}</HelmetProvider>;

