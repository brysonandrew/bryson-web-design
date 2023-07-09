import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import type { TChildrenElement } from '@t/index';
import { isMobile } from 'react-device-detect';
import { useScroll } from 'framer-motion';
import { PNG_EXT, WEBP_EXT } from '@constants/media';
import { resolveRandomIndicies } from '@hooks/media/resolveRandomIndicies';
import { resolveProjectImageResolverRecord } from '@hooks/media/resolveProjectScreensRecord';
import {
  TScreensRecord,
  TProjectImageResolverRecord,
} from '@t/screens';

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
  const { scrollX, scrollY } = useScroll();
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });

  return (
    <Context.Provider
      value={{
        projectImageResolverRecord,
        screensLookup,
        screensLookupSmall: {
          [PNG_EXT]: screensRecordSmallPng,
          [WEBP_EXT]: screensRecordSmallWebp,
        },
        randomIndicies: resolveRandomIndicies(),
        scrollX,
        scrollY,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
