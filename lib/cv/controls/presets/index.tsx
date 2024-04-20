import { TState } from '@brysonandrew/config-types';
import { TChangeEvent } from '@brysonandrew/contact';

type TProps<T extends string, V extends object> = {
  presetState: TState<T | null>;
  presetsEntries: [T,V][];
};
export const CvControlsPresets = <T extends string, V extends object>({
  presetState: [preset, setPreset],
  presetsEntries
}: TProps<T,V>) => {
  const handleChange = ({
    currentTarget: { name, value },
  }: TChangeEvent) => {
    setPreset(value as T);
  };
  return (
    <div className='column-start gap-2 bg-black text-white text-sm py-8 px-12'>
      <div className='font-semibold'>Presets</div>
      <ul>
        {presetsEntries.map(([key]) => {
          return (
            <li key={key}>
              <label className='row gap-1'>
                <input
                  name='preset'
                  type='radio'
                  value={key}
                  checked={key === preset}
                  onChange={handleChange}
                />
                <div>{key}</div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
