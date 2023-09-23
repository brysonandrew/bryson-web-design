import { useRef } from 'react';
import { useEventListener } from '@hooks/events/useEventListener';

type TConfig = {
  channel: RTCDataChannel | null;
  onChannelStatusChange(event: Event): void;
  onMessage(event: MessageEvent): void;
  onError(event: Event): void;
};
export const useChannelListeners = ({
  channel,
  onChannelStatusChange,
  onMessage,
  onError,
}: TConfig) => {
  const ref = useRef<RTCDataChannel | null>(channel);
  ref.current = channel;

  useEventListener('open', onChannelStatusChange, ref);
  useEventListener('message', onMessage, ref);
  useEventListener('close', onChannelStatusChange, ref);
  useEventListener(
    'closing',
    onChannelStatusChange,
    ref,
  );
  useEventListener('error', onError, ref);
};
