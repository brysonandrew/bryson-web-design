import { FC, VideoHTMLAttributes } from 'react';
import { useScreen } from './context';
import { P2 } from 'lib/components/layout/space/P2';
import { Subtitle } from '../components/Subtitle';

type TProps = VideoHTMLAttributes<HTMLVideoElement>;
export const Video: FC<TProps> = ({ ...props }) => {
  const { videoRef } = useScreen();

  return (
    <div>
      <Subtitle>Screen</Subtitle>
      <P2 />
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className='border-black-2 border-1 w-full'
        {...props}
      />
    </div>
  );
};
