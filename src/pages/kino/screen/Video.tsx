import {
  FC,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useScreen } from '../context/screen';
import { P2 } from '@components/space/P2';
import { Subtitle } from '../components/Subtitle';

type TProps = VideoHTMLAttributes<HTMLVideoElement>;
export const Video: FC<TProps> = ({ ...props }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const { activeStream } = useScreen();

  useEffect(() => {
    if (activeStream && ref.current) {
      ref.current.srcObject = activeStream;
    }
  }, [activeStream]);

  return (
    <div>
      <Subtitle>Screen</Subtitle>
      <P2 />
      <video
        ref={ref}
        playsInline
        autoPlay
        muted
        className='border-black-2 border-1'
        {...props}
      />
    </div>
  );
};
