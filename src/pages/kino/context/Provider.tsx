import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Kino, useKino } from '.';
import { TContext } from './types';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const kino = useKino();
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);
  const [localState, setLocalState] =
    useState<RTCDataChannelState | null>(null);
  const [remoteState, setRemoteState] =
    useState<RTCDataChannelState | null>(null);

  const value: TContext = {
    ...kino,
    localState,
    remoteState,
    receiveChannel,
    onUpdateReceiveChannel: setReceiveChannel,
    onUpdateLocalState: setLocalState,
    onUpdateRemoteState: setRemoteState,
  };
  console.log(value);

  return (
    <Kino.Provider value={value}>{children}</Kino.Provider>
  );
};
