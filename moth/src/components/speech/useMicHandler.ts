import { useRef } from "react";

type TConfig = MediaStreamConstraints;
type TSuccess = (stream: MediaStream) => void;
type TError = (error: MediaStreamError) => void;
type TConnectHandlerConfig = {
  success: TSuccess;
  error: TError;
};
type TReturn = {
  connect(config: TConnectHandlerConfig): void;
  disconnect(): void;
};
export const useMicHandler = (
  constraints: TConfig
): TReturn => {
  const streamRef = useRef<MediaStream | null>(null);

  const connect = ({
    success,
    error,
  }: TConnectHandlerConfig) => {
    window.navigator.getUserMedia(
      constraints,
      (stream: MediaStream) => {
        stream.onaddtrack = console.log;
        stream.onremovetrack = console.log;
        streamRef.current = stream;
        success(streamRef.current);
      },
      error
    );
  };
  const disconnect = () => {

    if (streamRef.current?.active) {
      const tracks: MediaStreamTrack[] =
        streamRef.current.getAudioTracks();

      for (const track of tracks) {
        track.stop();
      }
    }
  };
  return { connect, disconnect };
};
