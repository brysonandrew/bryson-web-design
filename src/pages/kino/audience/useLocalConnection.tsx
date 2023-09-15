import { TError } from '@t/index';
import { useKino } from '../context';
import { useEffect } from 'react';

export const useLocalConnection = () => {
  const { localConnection, remoteConnection, localState } =
    useKino();

  useEffect(() => {
    localConnection.onicecandidate = async (
      event: RTCPeerConnectionIceEvent,
    ) => {
      console.log('localConnection.onicecandidate ', event);
      const candidate: RTCIceCandidate | null =
        event.candidate;
      if (!candidate) return;
      console.log(candidate, remoteConnection);
      try {
        const x = await remoteConnection.addIceCandidate(
          candidate,
        );
        console.log(x);
      } catch (error: TError) {
        console.log('LOCAL CONNECTION ERROR');
        console.log(error);
      }
    };
  }, []);

  return localState;
};
