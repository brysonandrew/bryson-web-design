import { useRef } from 'react';
import { useEventListener } from '@hooks/events/useEventListener';

type TConfig = {
  connection: RTCPeerConnection;
  onDataChannel(event: RTCDataChannelEvent): void;
  onIceCandidate(event: RTCPeerConnectionIceEvent): void;
};
export const useConnectionListeners = ({
  connection,
  onDataChannel,
  onIceCandidate,
}: TConfig) => {
  const ref = useRef<RTCPeerConnection>(connection);

  useEventListener('datachannel', onDataChannel, ref);
  useEventListener('icecandidate', onIceCandidate, ref);

  const handleIceConnectionStateChange = (event: Event) =>
    console.log(event);
  useEventListener(
    'iceconnectionstatechange',
    handleIceConnectionStateChange,
    ref,
  );

  const handleConnectionStateChange = (event: Event) =>
    console.log(event);
  useEventListener(
    'connectionstatechange',
    handleConnectionStateChange,
    ref,
  );

  const handleIceGatheringStateChange = (event: Event) =>
    console.log(event);
  useEventListener(
    'icegatheringstatechange',
    handleIceGatheringStateChange,
    ref,
  );

  const handleNegotiationNeeded = (event: Event) =>
    console.log(event);
  useEventListener(
    'negotiationneeded',
    handleNegotiationNeeded,
    ref,
  );

  const handleSignalingStateChange = (event: Event) =>
    console.log(event);
  useEventListener(
    'signalingstatechange',
    handleSignalingStateChange,
    ref,
  );

  const handleTrack = (event: RTCTrackEvent) =>
    console.log(event);
  useEventListener('track', handleTrack, ref);

  const handleIceCandidateError = (event: Event) =>
    console.log(event, 'icecandidateerror');
  useEventListener(
    'icecandidateerror',
    handleIceCandidateError,
    ref,
  );
};
