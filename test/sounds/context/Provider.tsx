import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { CONTEXT, SOUND } from './constants';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isSound, setSound] = useState(CONTEXT.isSound);

  return (
    <SOUND.Provider
      value={{
        context: CONTEXT.context,
        isSound,
        toggleSound: () => setSound(!isSound),
      }}
    >
      {children}
    </SOUND.Provider>
  );
};
