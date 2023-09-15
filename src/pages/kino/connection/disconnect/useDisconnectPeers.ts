import { useKino } from '../../context';

export const useDisconnectPeers = () => {
  const {
    sendChannel,
    localConnection,
    remoteConnection,
    receiveChannel,
  } = useKino();
  
  const handler = async () => {
    console.log('DISCONNECT');
    // Close the RTCDataChannels if they're open.
    sendChannel.close();
    if (receiveChannel) {
      receiveChannel.close();
    }
    // Close the RTCPeerConnections
    localConnection.close();
    remoteConnection.close();
  };

  return handler;
};
