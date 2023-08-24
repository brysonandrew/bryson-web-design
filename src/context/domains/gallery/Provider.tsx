import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { PNG_EXT, WEBP_EXT } from '@constants/media';
import { resolveProjectImageResolverRecord } from '@hooks/media/resolveProjectScreensRecord';
import {
  TProjectImageResolverRecord,
  TScreensRecord,
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

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });
  return (
    <Context.Provider
      value={{
        screensLookup,
        projectImageResolverRecord,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
