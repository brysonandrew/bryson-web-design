import { useRef } from 'react';
import { TextInput as Input } from './components/Inputs';
import { useReader } from './context';
import { usePlay } from './hooks/usePlay';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';

export const TextInput = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const {
    phraseState: [phrase, setPhrase],
  } = useReader();
  const handlePlay = usePlay();
  const { timeoutRef } = useTimeoutRef();

  return (
    <label
      className='w-full bg-black-2 grow'
      onClick={async () => {
        if (ref.current) {
          ref.current.focus();
          const clipboard =
            await navigator.clipboard.readText();
          setPhrase(clipboard);
          timeoutRef.current = setTimeout(() => {
            handlePlay();
          }, 0);
        }
      }}
    >
      <Input
        ref={ref}
        className='w-full h-full p-4 text-2xl'
        name='phrase'
        placeholder='Enter a phrase'
        value={phrase ?? ''}
        onChange={({ currentTarget }) =>
          setPhrase(currentTarget.value)
        }
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            handlePlay();
          }
        }}
      />
    </label>
  );
};
