import { Option, Shell } from '../../components/Inputs';
import { FC } from 'react';
import { TContext } from '@pages/_workshop/reader/context/types';

type TProps = Pick<TContext, 'langState'> & {
  voices: SpeechSynthesisVoice[];
};
export const Lang: FC<TProps> = ({
  langState: [lang, setLang],
  voices,
}) => {
  return (
    <Shell
      value={lang ?? ''}
      onChange={({ target }) =>
        setLang((target as HTMLSelectElement).value)
      }
    >
      {[
        ...new Set((voices || []).map(({ lang }) => lang)),
      ].map((lang) => (
        <Option key={lang} value={lang}>
          {lang}
        </Option>
      ))}
    </Shell>
  );
};
