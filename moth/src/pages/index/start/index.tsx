import { CENTER } from "@constants/styles";
import styled from "@emotion/styled";
import { useLoop } from "@hooks/sounds/koolasuchas/useLoop";
import { useKey } from "@hooks/useKey";
import { useMothContext } from "@state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, type FC } from "react";
import COLORS from "@windi/config-colors.json";
import { Controls } from "./controls";

const Root = styled(motion.div)``;

export const Start: FC = () => {
  const { dispatch } = useMothContext();
  const { play } = useLoop();
  const handleStart = () => {
    dispatch({
      type: "start",
      value: null,
    });
  };

  useEffect(() => {
    play();
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
      // onTap={play}
    >
      <motion.video
        className={clsx("absolute w-full h-full")}
        autoPlay
        src="/video/moth.mp4"
        muted
        loop
        style={{ objectFit:"cover" }}
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
      <Controls />
    </Root>
  );
};
