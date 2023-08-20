import {
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { isMobile } from 'react-device-detect';
import { useMotionValue, useScroll } from 'framer-motion';
import { PNG_EXT, WEBP_EXT } from '@constants/media';
import { resolveRandomIndicies } from '@hooks/media/resolveRandomIndicies';
import { resolveProjectImageResolverRecord } from '@hooks/media/resolveProjectScreensRecord';
import {
  TScreensRecord,
  TProjectImageResolverRecord,
} from '@t/screens';
import { useDarkMode } from '@hooks/style/useDarkMode';
import { TCursorOffset } from '@hooks/cursor/useCursorOffset';

const screensRecordPng: TScreensRecord = import.meta.glob(
  '/screens/**/+([0-9]|!(*[a-z]*)[0-9]).png',
);
const screensRecordWebp: TScreensRecord = import.meta.glob(
  '/screens/**/+([0-9]|!(*[a-z]*)[0-9]).webp',
);

const screensLookup = {
  [PNG_EXT]: screensRecordPng,
  [WEBP_EXT]: screensRecordWebp,
};

const projectImageResolverRecord: TProjectImageResolverRecord =
  resolveProjectImageResolverRecord(screensLookup);

const screensRecordSmallPng: TScreensRecord =
  import.meta.glob(
    '/screens/**/+([0-9]|!(*[a-z]*)[0-9])-sm.png',
  );
const screensSmallCount = Object.keys(
  screensRecordSmallPng,
).length;
const screensRecordSmallWebp: TScreensRecord =
  import.meta.glob(
    '/screens/**/+([0-9]|!(*[a-z]*)[0-9])-sm.webp',
  );

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const offsetRef = useRef<TCursorOffset>({
    x: 1,
    y: -1,
  });
  const cursorLabelX = useMotionValue(0);
  const cursorLabelY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const { scrollX, scrollY } = useScroll();
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });
  const randomIndicies = useMemo(
    () => resolveRandomIndicies(screensSmallCount),
    [screensSmallCount],
  );
  const darkMode = useDarkMode();

  useEffect(() => {
    const sw: ServiceWorkerContainer =
      navigator.serviceWorker;
    sw.onmessage = (event) => {
      // if (event.data.type === 'random-indicies') {
      //   console.log(event.data);
      // }
    };
    sw.onmessageerror = (event) => {
      console.log('MESSAGE ERROR', event);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        offsetRef,
        darkMode,
        projectImageResolverRecord,
        screensLookup,
        screensLookupSmall: {
          [PNG_EXT]: screensRecordSmallPng,
          [WEBP_EXT]: screensRecordSmallWebp,
        },
        randomIndicies,
        scroll: { x: scrollX, y: scrollY },
        cursor: { x: cursorX, y: cursorY },
        cursorLabel: {
          x: cursorLabelX,
          y: cursorLabelY,
        },
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
