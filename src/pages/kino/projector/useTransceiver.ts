import { useProjector } from './context';

const PREFERRED_VIDEO_CODEC_MIME_TYPE = 'video/VP8';

export const useTransceiver = (stream: MediaStream) => {
  const { connection } = useProjector();

  const handler = () => {
    if (
      'setCodecPreferences' in
      window.RTCRtpTransceiver.prototype
    ) {
      const capabilities =
        RTCRtpSender.getCapabilities('video');
      const codecs = capabilities?.codecs;
      if (!codecs) return;
      const selectedCodecIndex = codecs.findIndex(
        (c) =>
          c.mimeType === PREFERRED_VIDEO_CODEC_MIME_TYPE,
      );
      const selectedCodec = codecs[selectedCodecIndex];
      codecs.splice(selectedCodecIndex, 1);
      codecs.unshift(selectedCodec);

      const transceiver = connection
        .getTransceivers()
        .find(
          (t) =>
            t.sender &&
            t.sender.track === stream.getVideoTracks()[0],
        );

      if (!transceiver) return;

      transceiver.setCodecPreferences(codecs);
    }
  };

  return handler;
};
