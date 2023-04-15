import { CENTER } from "@moth-constants/styles";
import styled from "@emotion/styled";
import { useKey } from "@moth-hooks/useKey";
import { useMothContext } from "@moth-state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, type FC } from "react";
import COLORS from "@windi/config-colors.json";
import { Controls } from "./controls";
import { usePlay } from "@moth-hooks/sounds/ost/tracks/koolasuchas/usePlay";
import { Levels } from "./levels";

const Root = styled(motion.div)``;

export const Start: FC = () => {
  const { dispatch, isSound } = useMothContext();
  const { play } = usePlay();
  const handleStart = () => {
    dispatch({
      type: "start",
      value: null,
    });
  };

  const handlePlay = () => {
    if (isSound) {
      play();
    }
  };

  useEffect(() => {
    handlePlay();
  }, []);

  useKey({
    handlers: {
      onKeyDown: ({ key }) => {
        if (key === "Enter") {
          handleStart();
        }
      },
    },
    isActive: true,
  });

  return (
    <Root
      className={clsx(CENTER, "w-screen h-screen")}
      onTap={handlePlay}
    >
      <motion.video
        className={clsx("absolute w-full h-full")}
        autoPlay
        src="/video/moth.mp4"
        muted
        loop
        style={{ objectFit: "cover" }}
      />

      <div className="relative flex flex-col items-center">
        <h1
          className="text-10xl lg:text-20xl"
          style={{
            filter: `drop-shadow(0px 0px 12px ${COLORS["teal"]})`,
          }}
        >
          Moth
        </h1>
        <div className="p-1" />
        <motion.button
          className="relative text-xl text-teal px-4 py-2"
          onTap={handleStart}
          style={{
            filter: `drop-shadow(0px 0px 12px ${COLORS["teal"]})`,
          }}
          whileHover="hover"
        >
          <motion.div
            style={{ opacity: 0.2 }}
            variants={{ hover: { opacity: 1 } }}
            className="absolute inset-0 bg-teal-005"
          />
          [ Enter ]
        </motion.button>
      </div>
      <div
        className={clsx(
          "flex absolute top-0 left-0 py-2 px-4",
        )}
      >
        <Controls />
        <div className="p-2" />
        <Levels />
      </div>
    </Root>
  );
};
