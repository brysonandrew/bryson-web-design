

import { CvControlsInvert } from '@brysonandrew/cv/controls/invert';
import { CvControlsPresets } from '@brysonandrew/cv/controls/presets';
import { PrintInstructions } from '@brysonandrew/cv/controls/print-instructions';
import { useState } from 'react';

type TControls<T extends string> = {
  filter: string;
  preset: null | T;
};

type TProps<T extends string, V extends object> = {
  initPreset?: T | null;
  presetsEntries: [T,V][];
  children(controls: TControls<T>): void;
};
export const CvControls = <T extends string, V extends object>({
  initPreset = null,
  presetsEntries,
  children,
}: TProps<T,V>) => {
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
          <CvControlsPresets<T,V> presetState={presetState} presetsEntries={presetsEntries} />
          <PrintInstructions />
        </div>
      </div>
    </>
  );
};
