import styled from "@emotion/styled";
import { useMothContext } from "@moth-state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Fragment, type FC } from "react";
import { Lock } from "@moth-components/icons/Lock";
import { TLevelItem } from "@moth-state/types";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Levels: FC = () => {
  const { levels } = useMothContext();

  return (
    <Root
      className={clsx("py-2 px-4")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.28 }}
      whileHover={{ opacity: 1 }}
    >
      <h3 className="text-xs">Levels</h3>
      <div className="p-1" />
      <List className="flex items-center">
        {levels.map((level: TLevelItem, index) => (
          <Fragment key={level.name}>
            {index !== 0 && <li className="p-2" />}
            <li className="p-2 rounded-full shadow-teal-02">
              <Lock />
            </li>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
