import { useEffect } from 'react';
import { useKino } from '../context';
import { useReceiveChannel } from './useReceiveChannel';

export const useRemoteConnection = () => {
  const { localConnection, remoteConnection, remoteState } =
    useKino();
  const { messages, handler: handleReceiveChannel } =
    useReceiveChannel();

  useEffect(() => {
    const handleIceCandidate = async (
      event: RTCPeerConnectionIceEvent,
    ) => {
      try {
        if (!event.candidate) return;
        await localConnection.addIceCandidate(
          event.candidate,
        );
      } catch (error) {
        console.log(error);
      }
    };
    remoteConnection.ondatachannel = handleReceiveChannel;
    remoteConnection.onicecandidate = handleIceCandidate;
  }, []);

  return { messages, remoteState };
};
