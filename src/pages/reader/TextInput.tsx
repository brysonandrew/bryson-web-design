import { TextInput as Input } from './components/Inputs';
import { useReader } from './context';
import { usePlay } from './hooks/usePlay';

export const TextInput = () => {
  const {
    phraseState: [phrase, setPhrase],
  } = useReader();
  const handlePlay = usePlay();

  return (
    <label className='w-full bg-black-2 grow'>
      <Input
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
