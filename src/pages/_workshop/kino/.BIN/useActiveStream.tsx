import { useEffect } from 'react';
import { TLogsContext } from '../config/types';
import { TMediaSource } from '../screen/context/types';

type TConfig = Pick<TLogsContext, 'onLog'> & {
  mediaSource: TMediaSource;
  video: HTMLVideoElement | null;
};
export const useActiveStream = ({
  video,
  mediaSource,
  onLog,
}: TConfig) => {
  useEffect(() => {
    if (mediaSource && video) {
      console.log(mediaSource);
      video.src = URL.createObjectURL(mediaSource);
      onLog('set active media stream');
    }
  }, [mediaSource, video]);
};
