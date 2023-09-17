export const useIceCandidate = (
  signaling: BroadcastChannel,
) => {
  const handler = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const message = {
      type: 'candidate',
      candidate: null,
      ...event.candidate,
    };
    signaling.postMessage(message);
  };
  return handler;
};
