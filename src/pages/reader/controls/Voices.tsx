import type { FC } from 'react';
import {
  Select,
  Option,
  Shell,
} from '../components/Inputs';
import { useReader } from '../context';

export const Voices: FC = () => {
  const {
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    langState: [lang, setLang],
    voicesState: [voices, setVoices],
  } = useReader();

  if (!voices) return null;

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
      ).map((voice: SpeechSynthesisVoice) => (
        <Option key={voice.name} value={voice.voiceURI}>
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
