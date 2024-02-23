import { CV_PRESETS } from '@app/copy';
import { TState } from '@brysonandrew/config-types';
import { TChangeEvent } from '@brysonandrew/contact';

type TProps<T extends string> = {
  presetState: TState<T | null>;
};
export const CvControlsPresets = <T extends string>({
  presetState: [preset, setPreset],
}: TProps<T>) => {
  const handleChange = ({
    currentTarget: { name, value },
  }: TChangeEvent) => {
    setPreset(value as T);
  };
  return (
    <div className='column-start gap-2 bg-black text-white text-sm py-8 px-12'>
      <div className='font-semibold'>Presets</div>
      <ul>
        {CV_PRESETS.map(([key]) => {
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
