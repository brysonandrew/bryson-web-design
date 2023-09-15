import {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useKino } from '../../context';
import { P2 } from '@components/space/P2';

type TProps = InputHTMLAttributes<HTMLInputElement>;
export const Input: FC<TProps> = ({ value, onChange }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { localState, remoteState } = useKino();

  useEffect(() => {
    if (localState === 'open' && ref.current) {
      ref.current.focus();
    }
  }, [localState]);

  return (
    <label className='row'>
      <samp className='whitespace-nowrap'>
        Enter a message:
      </samp>
      <P2 />
      <input
        ref={ref}
        type='text'
        name='message'
        className='font-mono'
        placeholder='Message text'
        inputMode='decimal'
        size={60}
        maxLength={120}
        value={value}
        onChange={onChange}
        disabled={remoteState !== 'open'}
      />
    </label>
  );
};
