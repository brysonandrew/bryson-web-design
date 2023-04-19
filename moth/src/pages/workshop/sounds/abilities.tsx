import styled from "@emotion/styled";
import type { TAbilitiesSounds } from "@moth-hooks/sounds/abilities";
import { useAbilities as useAbilitiesSounds } from "@moth-hooks/sounds/abilities";
import { useUi as useUiSounds } from "@moth-hooks/sounds/ui";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";
import { Fragment, useRef } from "react";
import { useAbilities as useAbilitiesOn } from "@moth-components/moth/key-control/on/useAbilities";
import { useKey } from "@moth-hooks/useKey";
import type { TCurrent } from "@moth-components/moth/types";
import type { TAbilitiesKey } from "@moth-state/types";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;
const Item = styled(motion.li)``;
const Button = styled(motion.button)``;

export const Abilities = () => {
  const {
    controls,
    moth,
    spots,
    meshes,
    level,
    blades,
    activeSpecial,
    specials,
    inventory,
    isSound,
    note,
  } = useMothContext();
  const current: TCurrent = {
    moth,
    spots,
    meshes,
    level,
    blades,
    controls,
    activeSpecial,
    specials,
    inventory,
    isSound,
    note,
  };
  const keyRef = useRef<TCurrent>(current);
  keyRef.current = current;
  const abilitiesSounds = useAbilitiesSounds();
  const uiSounds = useUiSounds();

  const sounds: TAbilitiesSounds = abilitiesSounds;
  const handleAbilitiesOn = useAbilitiesOn({ keyRef });

  useKey({
    handlers: {
      onKeyDown: (event) => {
        handleAbilitiesOn(event.key, sounds);
      },
    },
    isActive: true,
  });

  const keys = Object.keys(
    controls.abilities,
  ) as TAbilitiesKey[];

  return (
    <Root className="flex items-center justify-center h-screen w-screen">
      <List>
        {keys.map((key) => (
          <Fragment key={key}>
            <Item className="p-1" />
            <Item>
              <Button onTap={() => sounds[key].play()}>
                {key}
              </Button>
            </Item>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
