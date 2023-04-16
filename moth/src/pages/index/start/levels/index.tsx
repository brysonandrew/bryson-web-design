import styled from "@emotion/styled";
import { Lock } from "@moth-components/icons/Lock";
import { Tick } from "@moth-components/icons/Tick";
import { useMothContext } from "@moth-state/Context";
import type { TLevelItem } from "@moth-state/types";
import { resolveBossTitle } from "@moth-utils/resolveBossTitle";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Fragment, type FC } from "react";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Levels: FC = () => {
  const { levels } = useMothContext();

  return (
    <Root
      className={clsx("py-2 px-4 bg-teal-005")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.28 }}
      whileHover={{ opacity: 1 }}
    >
      <h3 className="text-xl">Levels</h3>
      <div className="p-1" />
      <List className="flex flex-col items-start">
        {levels.map((level: TLevelItem, index) => (
          <Fragment key={level.name}>
            {index !== 0 && <li className="p-1" />}
            <li className="flex items-center rounded-full shadow-teal-02">
              {level.isLocked ? (
                <Lock />
              ) : (
                <Tick isChecked />
              )}
              <div className="p-1" />
              <div>{resolveBossTitle(level.name)}</div>
            </li>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
