import type { ChangeEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { useParams } from "./useParams";
import type {
  TNodeRecord,
  TProcessorsConfig,
} from "./config";
import { useMothContext } from "@moth-state/Context";

type TSource = {
  node: AudioBufferSourceNode | null;
  gainNode: GainNode | null;
};

export const useProcessors = ({
  processors,
  arrayBuffer,
}: TProcessorsConfig) => {
  const { context, master } = useMothContext();
  const [state, setState] = useState({
    isPlaying: false,
    isLoop: false,
  });
  const sourceRef = useRef<TSource>({
    node: null,
    gainNode: null,
  });
  const [record, setRecord] = useState<TNodeRecord | null>(
    null,
  );
  const handleParams = useParams();

  const createSource = async () => {
    if (!sourceRef.current.gainNode)
      throw Error("No source gain, called too early");
    await context.resume();
    const clone = arrayBuffer.slice(0);
    const buffer = await context.decodeAudioData(clone);
    sourceRef.current.node = context.createBufferSource();
    sourceRef.current.node.buffer = buffer;

    sourceRef.current.node.connect(
      sourceRef.current.gainNode,
    );

    sourceRef.current.node.onended = async () => {
      await createSource();
      setState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };
  };

  useMemo(() => {
    const resolveRecord = async () => {
      await context.resume();
      let record: TNodeRecord = {};

      sourceRef.current.gainNode = new GainNode(context);
      const processorsGainNode = new GainNode(context);
      await createSource();

      for (const processor of processors) {
        const { name, paramRecord, gain } = processor;
        const node = new AudioWorkletNode(context, name);
        handleParams({ node, paramRecord });
        const gainNode = new GainNode(context, {
          gain,
        });

        sourceRef.current.gainNode.connect(node);
        node.connect(gainNode);
        gainNode.connect(processorsGainNode);

        record = {
          ...record,
          [name]: {
            ...processor,
            node,
            gainNode,
          },
        };
      }

      processorsGainNode.connect(master);
      setRecord(record);
    };

    if (!record) {
      resolveRecord();
    }
  }, [arrayBuffer, processors]);

  const play = async () => {
    if (sourceRef.current.node) {
      sourceRef.current.node.loop = state.isLoop;
      sourceRef.current.node.start(context.currentTime);
      setState((prev) => ({
        ...prev,
        isPlaying: true,
      }));
    }
  };

  const stop = async () => {
    if (sourceRef.current.node) {
      sourceRef.current.node.stop(context.currentTime);
    }
  };

  const update = ({
    currentTarget: { name, value, type, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") {
      setState((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
  };

  return { record, play, stop, state, update };
};
