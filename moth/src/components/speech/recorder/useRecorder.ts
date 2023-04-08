import { useRef, useState } from "react";
import type { TRecorderState } from "./config";
import { INIT_STATE } from "./config";

export const useRecorder = () => {
  const [state, setState] =
    useState<TRecorderState>(INIT_STATE);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const current = state;
  const currentRef = useRef(current);
  currentRef.current = current;

  const recorderState = () => {
    setState((prev) => ({
      ...prev,
      variant: recorderRef.current?.state ?? null,
    }));
  };

  const createSource = () => {
    const options: BlobPropertyBag = {
      type: "audio/ogg; codecs=opus",
    };

    const blob = new Blob(chunksRef.current, options);

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const arrayBuffer = fileReader.result;
      if (arrayBuffer && typeof arrayBuffer !== "string") {
        setState((prev) => ({
          ...prev,
          arrayBuffer,
        }));
      }
    };

    fileReader.readAsArrayBuffer(blob);

    chunksRef.current = [];
  };

  const init = (stream: MediaStream) => {
    recorderRef.current = new MediaRecorder(stream);

    recorderRef.current.ondataavailable = (
      e: BlobEvent
    ) => {
      chunksRef.current.push(e.data);
      recorderState();
    };
    recorderRef.current.onerror = recorderState;
    recorderRef.current.onpause = recorderState;
    recorderRef.current.onresume = recorderState;
    recorderRef.current.onstart = recorderState;
    recorderRef.current.onstop = (e: Event) => {
      recorderState();
      createSource();
    };
  };

  const start = () => {
    if (recorderRef.current) {
      recorderRef.current.start();
    }
  };

  const stop = () => {
    if (
      recorderRef.current &&
      currentRef.current.variant !== "inactive"
    ) {
      recorderRef.current.stop();
    }
  };

  return {
    init,
    start,
    stop,
    state,
    recorder: recorderRef.current,
  };
};
