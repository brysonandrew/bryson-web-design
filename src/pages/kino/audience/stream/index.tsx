import { useState } from 'react';
import { useKino } from '../../context';
import { Button } from '../../components/Button';
import { useEnterKeyCallback } from '@pages/kino/hooks/useEnterKey';

export const Video = () => {
  const { sendChannel, remoteState } = useKino();
  const [value, setValue] = useState('');

  const handleSend = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    console.log(stream);
  };

  useEnterKeyCallback(handleSend);

  return (
    <div className='text-2xl'>
      <Button
        disabled={remoteState !== 'open'}
        onClick={handleSend}
      >
        <>Request Stream</>
      </Button>
    </div>
  );
};
