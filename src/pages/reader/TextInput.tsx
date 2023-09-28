import { useRef } from 'react';
import { TextInput as Input } from './components/Inputs';
import { useReader } from './context';
import { usePlay } from './hooks/usePlay';

export const TextInput = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const {
    phraseState: [phrase, setPhrase],
  } = useReader();
  const handlePlay = usePlay();

  return (
    <label
      className='w-full bg-black-2 grow'
      onClick={async () => {
        if (ref.current) {
          ref.current.focus();
          const clipboard =
            await navigator.clipboard.readText();
          setPhrase(clipboard);
          handlePlay();
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
