import { Foundation } from './sections/0-Foundation';
import { Content } from './sections/1-Content';
import { Responsive } from './sections/2-Responsive';
import { TProps } from './Section';
import { DarkMode } from './sections/3-DarkMode';

export const SECTIONS: TProps[] = [
  {
    title: 'Foundation',
    children: <Foundation />,
  },
  {
    title: 'Content',
    children: <Content />,
  },
  {
    title: 'Responsive',
    children: <Responsive />,
  },
  {
    title: 'Dark Mode',
    children: <DarkMode />,
  },
  {
    title: 'Splash Screen',
    children: <DarkMode />,
  },
];
