import {
  FC,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useKino } from '../../context';

type TProps = VideoHTMLAttributes<HTMLVideoElement>;
export const Video: FC<TProps> = ({ ...props }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const { localState } = useKino();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <video ref={ref} {...props} />;
};
