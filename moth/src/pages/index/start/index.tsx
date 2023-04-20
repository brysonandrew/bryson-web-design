import styled from "@emotion/styled";
import { CENTER } from "@moth-constants/styles";
import { useKey } from "@moth-hooks/useKey";
import { useMothContext } from "@moth-state/Context";
import COLORS from "@windi/config-colors.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import { type FC } from "react";
import { Controls } from "./controls";
import { Footer } from "./footer";
import { useStartSong } from "./useStartSong";

const Root = styled(motion.div)``;

export const Start: FC = () => {
  const { dispatch } = useMothContext();
  //const { play, stop } = useStartSong();

  const handleStart = () => {
    stop();
    dispatch({
      type: "start",
      value: null,
    });
  };

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
      //onTap={play}
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
          className="relative text-xl text-teal px-4 py-2 z-10"
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
          "flex absolute top-0 left-0 w-full py-2 px-4",
        )}
      >
        <Controls />
      </div>
      <Footer />
    </Root>
  );
};
