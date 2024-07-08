import { useState } from 'react';
import { TImgMotionProps } from '@brysonandrew/config-types';
import { TImageStatus } from '@pages/index/build/types';
import { useHomeBuild } from '@pages/index/build/context';
import { TMediaRecord } from '@brysonandrew/media';

type TConfig = TMediaRecord;
export const usImageStatus = (config: TConfig) => {
  const { replaceRecord } = useHomeBuild();

  const [status, setStatus] =
    useState<TImageStatus>('init');

  const handlers: Pick<
    TImgMotionProps,
    'onError' | 'onLoad' | 'onLoadStart'
  > = {
    onLoadStart: (_) => {
      setStatus('loading');
    },
    onLoad: (_) => {
      setStatus('ready');
    },
    onError: (e) => {
      console.error(e);
      setStatus('error');
      replaceRecord(config.src);
    },
  };

  return [status, handlers] as const;
};
