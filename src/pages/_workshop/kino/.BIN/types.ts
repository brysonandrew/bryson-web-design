export type TUpdateChannelHandler = (
  channel: RTCDataChannel | null,
) => void;

export type TReceiveChannelContext = {
  receiveChannel: RTCDataChannel | null;
  onUpdateReceiveChannel: TUpdateChannelHandler;
};
