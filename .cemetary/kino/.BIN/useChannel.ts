import {
  TLogHandler,
  TMessage,
  TSignalingType,
} from '../config/types';
import { useRef, useState, useEffect } from 'react';

import { CHANNEL_KEY } from '../hooks/signaling/config';

type TConfig = {
  connection: RTCPeerConnection;
  onLog: TLogHandler;
  keys: TSignalingType[];
};
export const useChannel = ({
  connection,
  onLog,
  keys,
}: TConfig) => {
  const messageRef = useRef<string>(null);
  const [message, setMessage] = useState<TMessage | null>(
    null,
  );

  const { channel } = _useChannel(
    CHANNEL_KEY,
    (message: TMessage) => {
      setMessage(message);
    },
  );

  const handleSignal = useSignaling({
    channel,
    connection,
    onLog,
  });

  useEffect(() => {
    if (
      message !== null &&
      messageRef.current !== message.id
    ) {
      console.log(channel);
      console.log(message);

      handleSignal(message, keys);
    }
  }, [message]);

  return channel;
};
