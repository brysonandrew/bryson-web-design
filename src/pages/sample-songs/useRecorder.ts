import { useMothContext } from "@moth/state/Context";
import { useRef } from "react";
import { useDownload } from "./useDownload";

export const useRecorder = () => {
  const { context, master } = useMothContext();
  const download = useDownload();
  const bufferRef = useRef<ArrayBuffer|null>(null);

  const read = async (arrayBuffer: ArrayBuffer) => {
    try {
      const x = await context.decodeAudioData(arrayBuffer);
      console.log("XX");
      console.log(x);
    } catch (err) {
      console.log(err);
    }
  };

  const handler = async () => {
    const ab = new Float32Array(1000);
    read(ab);
    await context.audioWorklet.addModule("recorder.js");
    const recorder = new AudioWorkletNode(
      context,
      "recorder",
    );
    master.connect(recorder);
    recorder.port.onmessage = (e) => {
      if (e.data.eventType === "data") {
        const audioData = e.data.audioBuffer;
        //bufferRef.current = [...audioData];
        // process pcm data
        //console.log("PROCESSING PCM DATA");
        const options: BlobPropertyBag = {
          type: "audio/ogg; codecs=opus",
        };
        // const options: BlobPropertyBag = {
        //   type: "audio/webm",
        // };
        // const options: BlobPropertyBag = {
        //   type: "video/web",
        // };
        const blob = new Blob(audioData, options);
        const fileReader = new FileReader();

        fileReader.onloadend = async () => {
          console.log("LOAD ENDED");
          console.dir(fileReader);
          const arrayBuffer = fileReader.result;

          if (
            arrayBuffer &&
            typeof arrayBuffer !== "string"
          ) {
            console.log("🚀arrayBuffer:", arrayBuffer);
            read(arrayBuffer);

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
          }
        };

        fileReader.readAsArrayBuffer(blob);
      }

      if (e.data.eventType === "stop") {
        console.log("STOPPED");
      }
    };

    const startRecordingTime = context.currentTime;
    recorder.parameters
      .get("isRecording")
      .setValueAtTime(1, startRecordingTime);
    recorder.parameters
      .get("isRecording")
      .setValueAtTime(0, startRecordingTime + 2);
    // yourSourceNode.start(time);
    //setPlay(name);
  };

  return handler;
};
