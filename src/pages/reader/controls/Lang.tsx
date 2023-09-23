import { useReader } from '../context';
import {
  Select,
  Option,
  Shell,
} from '../components/Inputs';

export const Lang = () => {
  const {
    langState: [lang, setLang],
    voicesState: [voices, setVoices],
  } = useReader();

  if (!voices) return null;

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
