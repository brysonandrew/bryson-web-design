import { ChangeEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { P4 } from '@components/space/P4';
import { Input } from './Input';
import { useProjector } from '@pages/kino/projector/context';
import { useEnterKeyCallback } from '@pages/kino/hooks/useEnterKey';

export const Message = () => {
  const { sendChannel, statusRecord } = useProjector();
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
        // disabled={
        //   statusRecord.channelState !== 'open'
        // }
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </div>
  );
};
