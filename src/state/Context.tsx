import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { STATE } from './constants';
import type { TAction, TContext } from './types';
import { motionValue } from 'framer-motion';
import { EMPTY_SCREENS_LOOKUP } from '@constants/media';
import { INIT } from '@hooks/dom/useDarkMode';

export const Context = createContext<TContext>({
  ...STATE,
  darkMode: INIT,
  randomIndicies: [],
  screensLookup: EMPTY_SCREENS_LOOKUP,
  screensLookupSmall: EMPTY_SCREENS_LOOKUP,
  projectImageResolverRecord: {},
  offsetRef: { current: { x: 1, y: 1 } },
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  cursorLabelX: motionValue(0),
  cursorLabelY: motionValue(0),
  cursorX: motionValue(0),
  cursorY: motionValue(0),
  dispatch: (_: TAction) => null,
});

export const useContext = (): TContext =>
  useReactContext<TContext>(Context);
