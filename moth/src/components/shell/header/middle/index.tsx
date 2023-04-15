import styled from "@emotion/styled";
import { RIVER_HORSE_KEY } from "@moth-components/hud/constants";
import { Lighthouse } from "@moth-components/icons/Lighthouse";
import { LG } from "@moth-constants/styles";
import { useMothContext } from "@moth-state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

const resolveNote = (note: string | null) => {
  switch (note) {
    case RIVER_HORSE_KEY: {
      return "You killed my river horse!";
    }
    default: {
      return "...";
    }
  }
};

export const Middle = () => {
  const { note, dispatch } = useMothContext();

  if (!note) return null;
  const handleTap = () => {
    dispatch({ type: "clear-note", value: null });
  };
  return (
    <Root
      className="w-screen h-screen flex flex items-center justify-center"
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
        <div className="flex text-teal-bright">
          <Lighthouse classValue={clsx(LG)} />
          <div className="p-2" />
          <p>{resolveNote(note)}</p>
        </div>
      </div>
    </Root>
  );
};
