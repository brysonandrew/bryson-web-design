import { Play } from "@moth-components/icons/Play";
import { Playing } from "@moth-components/icons/Playing";
import styled from "@emotion/styled";
import { useLoop as useKoolasuchasLoop } from "@moth-hooks/sounds/koolasuchas/useLoop";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;
const Item = styled(motion.li)``;
const Button = styled(motion.button)``;
const Icon = styled(motion.div)``;

export const Ost = () => {
  const [nowPlaying, setPlay] = useState<string | null>(
    null,
  );
  const { play, stop } = useKoolasuchasLoop();

  const handleTap = async (name: string) => {
    if (nowPlaying === null) {
      await play();
      setPlay(name);
    } else {
      stop();
      setPlay(null);
    }
  };

  return (
    <Root className="flex items-center justify-center h-screen w-screen">
      <List className="p-4 shadow-teal-dark">
        {["koolasuchas"].map((name, index) => (
          <Fragment key={name}>
            {index !== 0 && <Item className="py-1" />}
            <Item className="relative shadow-teal-08 pr-4">
              {nowPlaying === name && (
                <motion.div
                  layoutId="SELECTED_INVENTORY"
                  className="absolute inset-0 shadow-teal-04-sm pointer-events-none"
                />
              )}
              <Button
                className="flex items-center"
                onTap={() => handleTap(name)}
              >
                <Icon className="flex items-center justify-center w-12 h-12">
                  {name === nowPlaying ? (
                    <Playing />
                  ) : (
                    <Play />
                  )}
                </Icon>
                <div className="p-2" />
                <h5>{name}</h5>
              </Button>
            </Item>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
