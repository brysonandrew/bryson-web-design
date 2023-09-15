import { ChangeEvent, useState } from 'react';
import { useKino } from '../../context';
import { Button } from '../../components/Button';
import { P4 } from '@components/space/P4';
import { Input } from './Input';
import { useEnterKeyCallback } from '@pages/kino/hooks/useEnterKey';

export const Message = () => {
  const { sendChannel, remoteState } = useKino();
  const [value, setValue] = useState('');

  const handleSendMessage = () => {
    sendChannel.send(value);
    setValue('');
  };

  useEnterKeyCallback(handleSendMessage);

  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return (
    <div className='text-2xl'>
      <Input value={value} onChange={handleChange} />
      <P4 />
      <Button
        disabled={remoteState !== 'open'}
        onClick={handleSendMessage}
      >
        <>Send</>
      </Button>
    </div>
  );
};
