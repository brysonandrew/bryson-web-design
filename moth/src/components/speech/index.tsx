import type { ChangeEvent, FC } from "react";
import { motion } from "framer-motion";
import { useState } from "./useState";
import { Header } from "./header";
import { Settings } from "./settings";
import { useRecorder } from "./recorder/useRecorder";
import { useController } from "./useController";
import { useMicHandler } from "./useMicHandler";

export const Speech: FC = () => {
  const { connect, disconnect } = useMicHandler({
    audio: true,
  });
  const {
    init: initRecorder,
    start: startRecorder,
    stop: stopRecord,
    state: recorderState,
  } = useRecorder();
  const { state, updateState, random } = useState({
    text: "BLAH!",
  });

  const update = ({
    currentTarget: { name, value },
  }: ChangeEvent<
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
  >) => {
    if (!state.isPlaying) {
      const next = {
        [name]: value,
      };
      updateState(next);
    }
  };

  const handleStop = () => {
    stopRecord();
    cancelSpeech();
    disconnect();
  };

  const {
    pause,
    play: playSpeech,
    cancel: cancelSpeech,
  } = useController({
    state,
    onUpdateState: updateState,
    onEnd: handleStop,
  });

  const handlePlay = async () => {
    const handleSuccess = (stream: MediaStream) => {
      initRecorder(stream);
      startRecorder();
      playSpeech();
    };
    const handleError = console.error;
    connect({ success: handleSuccess, error: handleError });
  };

  return (
    <motion.div
      className="text-white"
      style={{ width: "100%" }}
    >
      <div className="p-6" />
      <Header
        recorderState={recorderState}
        speechState={state}
        play={handlePlay}
        pause={pause}
        cancel={handleStop}
        random={random}
      />
      <div className="p-4" />
      {state.activeVoices.length > 0 && (
        <Settings state={state} update={update} />
      )}
      <div className="p-6" />
      {/* {!state.isPlaying && recorderState.arrayBuffer && (
        <div>
          <div className="py-1" />
          <Process
            arrayBuffer={recorderState.arrayBuffer}
            processors={PROCESSORS}
          />
        </div>
      )} */}
    </motion.div>
  );
};
