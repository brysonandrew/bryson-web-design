import { useRef } from 'react';
import { useEventListener } from '@hooks/events/useEventListener';

type TConfig = {
  connection: RTCPeerConnection;
  onDataChannel(event: RTCDataChannelEvent): void;
  onIceCandidate(event: RTCPeerConnectionIceEvent): void;
  onIceConnectionStateChange(event: Event): void;
  onConnectionStateChange(event: Event): void;
  onIceGatheringStateChange(event: Event): void;
  onNegotiationNeeded(event: Event): void;
  onSignalingStateChange(event: Event): void;
  onTrack(event: RTCTrackEvent): void;
  onIceCandidateError(event: Event): void;
};
export const useConnectionListeners = ({
  connection,
  onDataChannel,
  onIceCandidate,
  onIceConnectionStateChange,
  onConnectionStateChange,
  onIceGatheringStateChange,
  onNegotiationNeeded,
  onSignalingStateChange,
  onTrack,
  onIceCandidateError,
}: TConfig) => {
  const ref = useRef<RTCPeerConnection>(connection);

  useEventListener('datachannel', onDataChannel, ref);
  useEventListener('icecandidate', onIceCandidate, ref);
  useEventListener(
    'iceconnectionstatechange',
    onIceConnectionStateChange,
    ref,
  );
  useEventListener(
    'connectionstatechange',
    onConnectionStateChange,
    ref,
  );
  useEventListener(
    'icegatheringstatechange',
    onIceGatheringStateChange,
    ref,
  );
  useEventListener(
    'negotiationneeded',
    onNegotiationNeeded,
    ref,
  );
  useEventListener(
    'signalingstatechange',
    onSignalingStateChange,
    ref,
  );
  useEventListener('track', onTrack, ref);
  useEventListener(
    'icecandidateerror',
    onIceCandidateError,
    ref,
  );
};
