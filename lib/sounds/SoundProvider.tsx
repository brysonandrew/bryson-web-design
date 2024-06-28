import {
  useContext as useReactContext,
  createContext,
  FC,
  PropsWithChildren,
  useState,
} from 'react';
import { TSoundContext } from '@brysonandrew/sounds/config/types';
import { NOOP } from '@brysonandrew/utils-function';

const INIT = {
  context: new AudioContext(),
  isSound: false,
  toggleSound: NOOP,
};
export const Sound = createContext<TSoundContext>(INIT);

export const useSound = (): TSoundContext =>
  useReactContext<TSoundContext>(Sound);

export const SoundProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isSound, setSound] = useState(INIT.isSound);

  return (
    <Sound.Provider
      value={{
        context: INIT.context,
        isSound,
        toggleSound: () => setSound(!isSound),
      }}
    >
      {children}
    </Sound.Provider>
  );
};
