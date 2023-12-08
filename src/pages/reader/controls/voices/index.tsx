import { useReader } from '@pages/reader/context';
import { Lang } from './Lang';
import { Voice } from './Voice';

export const Voices = () => {
  const {
    langState,
    voicesState: [voices],
    selectedVoiceState,
  } = useReader();
  if (!voices) return null;
  return (
    <div className='column-end w-full gap-4'>
      <Lang voices={voices} langState={langState} />
      <Voice
        voices={voices}
        langState={langState}
        selectedVoiceState={selectedVoiceState}
      />
    </div>
  );
};
