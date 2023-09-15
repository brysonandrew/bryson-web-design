import { ChangeEvent, useState } from 'react';
import { useKino } from '../../context';
import { Button } from '../../common/Button';
import { P4 } from '@components/space/P4';
import { Input } from './Input';
import { useKey } from '@hooks/dom/useKey';

export const Message = () => {
  const { sendChannel, remoteState } = useKino();
  const [value, setValue] = useState('');

  const handleSendMessage = () => {
    sendChannel.send(value);
    setValue('');
  };

  useKey({
    handlers: {
      onKeyDown: ({ key }: KeyboardEvent) => {
        if (key === 'Enter') {
          handleSendMessage();
        }
      },
    },
    isActive: true,
  });

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
        <pre>Send</pre>
      </Button>
    </div>
  );
};
