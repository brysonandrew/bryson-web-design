import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";

const OFFSET = 0.01;

export type TFromTo = {
  from: number;
  to: number;
};
type TDisruptorHandlerConfig = THandlerConfig & {
  fromTo?: TFromTo;
};

export const useDistruptor = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    type = "sine",
    volume = 0.1,
    fromTo = {
      // from: 1,
      // to: 0.001,
      from: 0.001,
      to: 1,
    },
  }: TDisruptorHandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });

    const delay = new DelayNode(context, {
      delayTime: fromTo.from,
    });
    delay.delayTime.setValueAtTime(fromTo.from, startTime);

    const gain = new GainNode(context, { gain: volume });
    gain.gain.setValueAtTime(volume, startTime);
    const end = startTime + duration;

    const options: TMultiOptions = {
      type,
      midi: 24 + pitch,
      count: 24,
      spread: 2.2,
      stagger: 0.00099,
      start: startTime + OFFSET,
      end: end - OFFSET,
      output: filter,
    };
    delay.delayTime.exponentialRampToValueAtTime(
      fromTo.to,
      end,
    );
    const feedback = new GainNode(context, {
      gain: 0.99,
    });
    feedback.gain.setValueAtTime(0.99, startTime);
    // const feedbackEnd =
    //   end + Math.max(fromTo.to, fromTo.from);
    feedback.gain.exponentialRampToValueAtTime(
      0.001,
      end,
    );
    feedback.gain.setValueAtTime(0, end);

    delay.connect(filter);
    filter.connect(feedback);
    feedback.connect(delay);

    feedback.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
