import styled from "@emotion/styled";
import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import { Lighthouse } from "@moth-components/icons/Lighthouse";
import { LG } from "@moth-constants/styles";
import { useMothContext } from "@moth-state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Note } from "./note";

const Root = styled(motion.div)``;


export const Middle = () => {
  const { note, dispatch } = useMothContext();

  if (!note) return null;
  const handleTap = () => {
    dispatch({ type: "clear-note", value: null });
  };
  return (
    <Root
      className="w-screen h-screen flex items-center justify-center"
      onTap={handleTap}
    >
      <div
        className="absolute inset-0 bg-black-dark opacity-20"
        style={{
          opacity: 0.5,
          backdropFilter: "blur(20px)",
        }}
      />
      <div className="relative flex flex-col items-center p-4 bg-red">
        <div className="flex text-teal-bright px-12">
          <Lighthouse classValue={clsx(LG)} />
          <div className="p-2" />
          <Note note={note}/>
        </div>
      </div>
    </Root>
  );
};
