import { Foundation } from './sections/0-Foundation';
import { Content } from './sections/1-Content';
import { Responsive } from './sections/2-Responsive';
import { DarkMode } from './sections/3-DarkMode';
import { FC } from 'react';
import { SplashScreen } from './sections/z-SplashScreen';

export const SECTIONS: FC[] = [
  Foundation,
  Content,
  Responsive,
  DarkMode,
  SplashScreen,
];
