import { useEffect, useRef } from 'react';
import { TextInput as Input } from './Inputs';
import { usePlay } from '../hooks/usePlay';
import { resolveErrorMessage } from '@brysonandrew/utils-error/resolveErrorMessage';
import { useReader } from '@pages/_workshop/reader/context/ReaderProvider';

export const TextInput = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const {
    clipboardState: { handler, copying, onEnd },
    phraseState: [phrase, setPhrase],
  } = useReader();
  const handlePlay = usePlay();

  useEffect(() => { 
    if (copying === null) {
      handlePlay();
    }
  }, [copying]);

  return (
    <label
      className='w-full bg-black-2 grow'
      onClick={async () => {
        try {
          if (ref.current) {
            ref.current.focus();
            const clipboard =
              await navigator.clipboard.readText();
            setPhrase(clipboard);
            handler({
              title: 'main text',
              value: clipboard,
            });
          }
        } catch (error) {
          resolveErrorMessage(error);
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
