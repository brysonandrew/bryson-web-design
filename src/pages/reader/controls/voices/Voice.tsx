import { TContext } from '@pages/reader/context/types';
import type { FC } from 'react';
import { Option, Shell } from '../../components/Inputs';

type TProps = Pick<
  TContext,
  'selectedVoiceState' | 'langState'
> & {
  voices: SpeechSynthesisVoice[];
};
export const Voice: FC<TProps> = ({
  voices,
  langState: [lang],
  selectedVoiceState: [selectedVoice, setSelectedVoice],
}) => {
  return (
    <Shell
      value={selectedVoice ?? ''}
      onChange={({ target }) =>
        setSelectedVoice(
          (target as HTMLSelectElement).value,
        )
      }
    >
      {(lang
        ? voices.filter((voice) => voice.lang === lang)
        : voices
      ).map((voice: SpeechSynthesisVoice, index) => (
        <Option
          key={`${voice.name}-${index}`}
          value={voice.voiceURI}
        >
          {voice.voiceURI} -{' '}
          {voice.voiceURI !== voice.name
            ? `${voice.name} - `
            : ''}
          {voice.lang}
        </Option>
      ))}
    </Shell>
  );
};
