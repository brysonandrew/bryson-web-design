import styled from "@emotion/styled";
import { Circle } from "@moth-components/icons/Circle";
import { useMothContext } from "@moth-state/Context";
import type { TLevelKey } from "@moth-state/types";
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
        {levels.map((level: TLevelKey, index) => (
          <Fragment key={level}>
            {index !== 0 && <li className="p-1" />}
            <li className="flex items-center rounded-full shadow-teal-02">
              <Circle />
              {/* {level.isLocked ? (
                <Lock />
              ) : (
                <Tick isChecked />
              )} */}
              <div className="p-1" />
              <div>{resolveBossTitle(level)}</div>
            </li>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
