import {
  FC,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useKino } from '../context';

type TProps = VideoHTMLAttributes<HTMLVideoElement>;
export const Video: FC<TProps> = ({ ...props }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const { activeStream } = useKino();

  useEffect(() => {
    if (activeStream && ref.current) {
      ref.current.srcObject = activeStream;
    }
  }, [activeStream]);

  return (
    <video
      playsInline
      autoPlay
      muted
      className='glow-interactive-dark'
      ref={ref}
      {...props}
    />
  );
};
