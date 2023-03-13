import { useTransitionComposer } from "contexts/transition-composer";
import type {
  TKeyChain,
  TKeysConfig,
  TTransitionComposerContext,
} from "contexts/transition-composer/types";
import { useTransitionKeys } from "contexts/transition-composer/utils";
import type { RefCallback } from "react";
import { useEffect } from "react";
import { useDerivedStyle } from "utils/dom";
import { TransitionEdge } from ".";

type TReturn = {
  keyChain: TKeyChain;
  composer: TTransitionComposerContext;
  ref: RefCallback<HTMLElement>;
};
type TConfig = {
  frameId?: string;
  keysConfig: TKeysConfig;
};
export const useExpandingCircleTransition = ({ frameId, keysConfig }: TConfig): TReturn => {
  const [ref, style] = useDerivedStyle();
  const composer = useTransitionComposer();
  const { save, edgeBuilderRecord } = composer;
  const keyChain = useTransitionKeys(keysConfig);
  const { sourceShadowKey } = keyChain;
  useEffect(() => {
    if (style && sourceShadowKey && !edgeBuilderRecord[sourceShadowKey]) {
      save(sourceShadowKey, {
        create: (props) => (
          <TransitionEdge
            {...props}
            key={sourceShadowKey}
            backgroundStyle={{
              ...props.backgroundStyle,
              clipStyle: {
                ...props.backgroundStyle.clipStyle,
                initial: { r: "0%" },
                animate: { r: "140%" },
                exit: {
                  r: "140%",
                },
              },
              displayStyle: {
                ...props.backgroundStyle.displayStyle,
                initial: { opacity: 1 },
                animate: { opacity: 1 },
                exit: {
                  opacity: 0,
                },
              },
            }}
          />
        ),
        style,
      });
    }
  }, [style, edgeBuilderRecord, save, sourceShadowKey]);

  return { ref, keyChain, composer };
};
