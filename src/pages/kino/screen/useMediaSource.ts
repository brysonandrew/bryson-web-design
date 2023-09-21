import { useRef } from 'react';
import { resolveSupportedMimeTypes } from '../.BIN/recorder/resolveSupportedMimeTypes';

const concatBuffer = (
  buffer1: ArrayBuffer,
  buffer2: ArrayBuffer,
) => {
  const tmp = new Uint8Array(
    buffer1.byteLength + buffer2.byteLength,
  );
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp;
};

export const useMediaSource = () => {
  const arrayBufferRef = useRef<ArrayBuffer>(
    new Uint8Array(),
  );
  const mediaSource = new MediaSource();
  const supported = resolveSupportedMimeTypes();
  const mimeCodec = supported[0]; // SOURCE_BUFFER_MIME;
  const isMediaSource = 'MediaSource' in window;
  const isSupported =
    MediaSource.isTypeSupported(mimeCodec);

  if (isMediaSource && isSupported) {
    mediaSource.addEventListener('sourceopen', () => {
      const sourceBuffer =
        mediaSource.addSourceBuffer(mimeCodec);
      if (sourceBuffer.mode === 'segments') {
        sourceBuffer.mode = 'sequence';
      }
      sourceBuffer.onabort = console.log;
      sourceBuffer.onerror = console.log;
      sourceBuffer.onupdate = console.log;
      sourceBuffer.onupdatestart = console.log;
      sourceBuffer.onupdateend = (event) => {
        //onLog('END');
        console.log('ENDED');
        console.log(event);

        mediaSource.endOfStream();
        // if (videoRef.current) {
        //   videoRef.current.src =
        //     URL.createObjectURL(mediaSource);
        //   videoRef.current?.play();
        // }
        // console.log(mediaSource.readyState); // ended
      };

      // receiveChannel.onmessage = (event: MessageEvent) => {
      //   onLog('💬 channel message');

      //   if (mediaSource.readyState !== 'open') return;
      //   const buffer: ArrayBuffer = event.data;
      //   if (sourceBuffer.updating) {
      //     arrayBufferRef.current = concatBuffer(
      //       arrayBufferRef.current,
      //       buffer,
      //     );
      //   } else {
      //     sourceBuffer.appendBuffer(arrayBufferRef.current);
      //     arrayBufferRef.current = new Uint8Array();
      //   }
      //   console.log('state: ' + mediaSource.readyState);
      //   console.log('updating: ' + sourceBuffer.updating);
      // };
    });
    mediaSource.addEventListener(
      'sourceclose',
      console.log,
    );
    mediaSource.addEventListener(
      'sourceended',
      console.log,
    );
  } else {
    console.error(
      'Unsupported MIME type or codec: ',
      mimeCodec,
    );
  }
};
