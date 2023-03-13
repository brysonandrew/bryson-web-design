import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";

export const useKeyButtonHold = (): boolean => {
  const [isHolding, setHolding] = useState(false);

  useEffect(() => {
    const handleHolding = () => setHolding(true);
    const handleReleasing = () => setHolding(false);
    const addEventListeners = () => {
      document.addEventListener("keydown", handleHolding);
      document.addEventListener("keyup", handleReleasing);
      // document.addEventListener("mousedown", handleHolding);
      // document.addEventListener("mouseup", handleReleasing);
      // document.addEventListener(
      //   "mousemove",
      //   handleReleasing,
      // );
    };
    const removeEventListeners = () => {
      document.removeEventListener(
        "keydown",
        handleHolding,
      );
      document.removeEventListener(
        "keyup",
        handleReleasing,
      );
      // document.removeEventListener(
      //   "mousedown",
      //   handleHolding,
      // );
      // document.removeEventListener(
      //   "mouseup",
      //   handleReleasing,
      // );
      // document.removeEventListener(
      //   "mousemove",
      //   handleReleasing,
      // );
    };
    addEventListeners();
    return () => {
      removeEventListeners();
    };
  }, []);

  return isHolding;
};

const DURATION_TIL_SKIP = 1;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.9)
  );
  background-size: 200% 200%;
  background-position: 150% 150%;
`;
const Text = styled(motion.span)`
  font-size: 22px;
  line-height: 28px;
  margin: 6px 20px 0 0;
  text-transform: uppercase;
`;

export const HoldToSkip = () => {
  const isHolding = useKeyButtonHold();

  return (
    <AnimatePresence>
      {isHolding && (
        <Root>
          <Text
            initial={{
              opacity: 0.6,
              filter: "drop-shadow(0 0 0px #fff)",
            }}
            animate={{
              opacity: 1,
              filter: "drop-shadow(0 0 20px #fff)",
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: DURATION_TIL_SKIP,
            }}
          >
            hold to skip
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <motion.circle
              initial={{
                pathLength: 0,
                pathOffset: 0,
                stroke: "currentColor",
              }}
              animate={{
                pathLength: 1.1,
                pathOffset: 0,
                stroke: "currentColor",
              }}
              exit={{
                pathLength: 0,
                pathOffset: 0,
                stroke: "currentColor",
                transition: { duration: 0.4 },
              }}
              transition={{
                type: "tween",
                duration: DURATION_TIL_SKIP,
              }}
              r="23"
              cx="24"
              cy="24"
              transform="rotate(-90)"
              strokeWidth="1"
            />
            <motion.circle
              initial={{ pathLength: 0, pathOffset: -1 }}
              animate={{ pathLength: 2.2, pathOffset: -1 }}
              exit={{
                pathLength: 0,
                pathOffset: -1,
                stroke: "currentColor",
                transition: { duration: 0.4 },
              }}
              transition={{
                type: "tween",
                duration: DURATION_TIL_SKIP,
              }}
              r="20"
              cx="24"
              cy="24"
              transform="rotate(-90)"
              strokeWidth="1"
              stroke="currentColor"
              strokeOpacity="0.75"
            />
            <motion.path
              d="M 29 30 H 31 V 18 H 29 M 19 30 L 27.5 24 L 19 18 V 30 Z"
              fill="currentColor"
              initial={{
                scale: 1.6,
                opacity: 1,
                filter: "drop-shadow(0 0 0px #fff)",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "drop-shadow(0 0 20px #fff)",
              }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{
                type: "tween",
                duration: DURATION_TIL_SKIP,
              }}
              onAnimationComplete={(target) => {
                if (
                  (target as CSSProperties)?.filter ===
                  "drop-shadow(0 0 20px #fff)"
                ) {
                  console.log("DONE");
                }
              }}
            />
          </svg>
        </Root>
      )}
    </AnimatePresence>
  );
};
