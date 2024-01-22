import type { FC, PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const HeadProvider: FC<PropsWithChildren> = ({
  children,
}) => <HelmetProvider>{children}</HelmetProvider>;
