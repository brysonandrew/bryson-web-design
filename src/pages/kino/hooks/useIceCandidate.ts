export const useIceCandidate = (
  signaling: BroadcastChannel,
) => {
  const handler = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const candidate = event.candidate;
    if (!candidate) return;
    const message = {
      type: 'candidate',
      candidate: JSON.stringify(candidate),
      // sdpMid: candidate.sdpMid,
      // sdpMLineIndex: candidate.sdpMLineIndex
    };
    signaling.postMessage(message);
  };
  return handler;
};
