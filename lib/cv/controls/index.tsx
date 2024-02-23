import { CvControlsInvert } from '@brysonandrew/cv/controls/invert';
import { CvControlsPresets } from '@brysonandrew/cv/controls/presets';
import { PrintInstructions } from '@brysonandrew/cv/controls/print-instructions';
import { useState } from 'react';

type TControls<T extends string> = {
  filter: string;
  preset: null | T;
};

type TProps<T extends string> = {
  initPreset?: T | null;
  children(controls: TControls<T>): void;
};
export const Controls = <T extends string>({
  initPreset = null,
  children,
}: TProps<T>) => {
  const invertState = useState(0);
  const [invert] = invertState;
  const filter = `invert(${invert}%)` as const;
  const presetState = useState<T | null>(initPreset);
  const [preset] = presetState;

  return (
    <>
      {children({ filter, preset })}
      <div className='row-start gap-4'>
        <div className='row-start gap-4' style={{ filter }}>
          <CvControlsInvert invertState={invertState} />
          <CvControlsPresets<T> presetState={presetState} />
          <PrintInstructions />
        </div>
      </div>
    </>
  );
};
