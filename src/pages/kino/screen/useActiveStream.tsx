import { FC, useEffect } from 'react';
import { TLogsContext } from '../config/types';
import { TActiveStream } from './context/types';

type TConfig = Pick<TLogsContext, 'onLog'> & {
  activeStream: TActiveStream;
  video: HTMLVideoElement | null;
};
export const useActiveStream = ({
  video,
  activeStream,
  onLog,
}: TConfig) => {
  useEffect(() => {
    if (activeStream && video) {
      video.srcObject = activeStream;
      onLog('set active media stream');
    }
  }, [activeStream, video]);
};
