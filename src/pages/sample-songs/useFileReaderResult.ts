import { useMothContext } from "@moth/state/Context";
import { useDownload } from "./useDownload";

export const useFileReaderResult = () => {
  const { context } = useMothContext();
  const download = useDownload();
  const handler = async (
    arrayBuffer: ArrayBuffer | null | string,
  ) => {
    if (arrayBuffer && typeof arrayBuffer !== "string") {
      console.log(arrayBuffer);
      console.log(arrayBuffer.byteLength);
      // (audioBuffer) => {
      //   console.log(audioBuffer);
      //   console.log("IIIIIII");
      //   // Do something with audioBuffer
      //   const mp3Blob = resolveToWav(audioBuffer);
      //   console.log("HERE");
      //   console.log(mp3Blob);
      //   //onStop(MP3Blob, audioBuffer);
      //   download(mp3Blob);
      // },
      // console.log,
      try {
        const x = await context.decodeAudioData(
          arrayBuffer,
        );
        console.log("XX");
        console.log(x);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return handler;
};
