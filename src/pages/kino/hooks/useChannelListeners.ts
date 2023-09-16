import { useRef } from 'react';
import { useEventListener } from '@hooks/events/useEventListener';

type TConfig = {
  channel: RTCDataChannel | null;
  onSendChannelStatusChange(event: Event): void;
  onMessage(event: MessageEvent): void;
  onError(event: Event): void;
};
export const useChannelListeners = ({
  channel,
  onSendChannelStatusChange,
  onMessage,
  onError,
}: TConfig) => {
  const ref = useRef<RTCDataChannel | null>(channel);
  ref.current = channel;

  useEventListener('open', onSendChannelStatusChange, ref);
  useEventListener('message', onMessage, ref);
  useEventListener('close', onSendChannelStatusChange, ref);
  useEventListener(
    'closing',
    onSendChannelStatusChange,
    ref,
  );
  useEventListener('error', onError, ref);
};
