import type { FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { VoiceControl } from "./voice-control";
import type { TBasicNumberProps } from "./Basic";
import { Basic } from "./Basic";

export type TPassedNumberProps = Pick<
  TNumberProps,
  "onChange"
>;

export type TNumberProps = HTMLMotionProps<"input"> &
  TBasicNumberProps & {
    isVoiceActived?: boolean;
  };
export const Number: FC<TNumberProps> = ({
  isVoiceActived,
  ...props
}) => {
  if (isVoiceActived) {
    return (
      <VoiceControl isFocused={null}>
        {(valueFromVoice: null | number) => (
          <Basic
            {...props}
            value={valueFromVoice ?? undefined}
          />
        )}
      </VoiceControl>
    );
  } else {
    return <Basic {...props} />;
  }
};
