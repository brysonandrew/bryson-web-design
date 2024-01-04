import { AppDevelopment } from './AppDevelopment';
import { TProps } from './Section';
import { Website } from './website';

export const SECTIONS: TProps[] = [
  {
    title: 'Single page website',
    children: <Website />,
  },
  {
    title: 'App development, consulting and other work',
    children: <AppDevelopment />,
  },
];
