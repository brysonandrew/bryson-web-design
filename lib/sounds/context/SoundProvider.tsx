import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { Sound } from '.';
import { CONTEXT } from './constants';

export const SoundProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isSound, setSound] = useState(CONTEXT.isSound);

  return (
    <Sound.Provider
      value={{
        context: CONTEXT.context,
        isSound,
        toggleSound: () => setSound(!isSound),
      }}
    >
      {children}
    </Sound.Provider>
  );
};
