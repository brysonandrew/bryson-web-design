import styled from "@emotion/styled";
import { useMothContext } from "@moth-state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Fragment, type FC } from "react";
import { Key } from "./Key";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Controls: FC = () => {
  const { controls } = useMothContext();
  const entries = Object.entries(controls);

  return (
    <Root
      className={clsx("py-2 px-4 bg-teal-005")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.28 }}
      whileHover={{ opacity: 1 }}
    >
      <h3 className="text-xl">Controls</h3>
      <div className="p-1" />
      <List>
        {entries.map(([controlType, value], index) => (
          <Fragment key={controlType}>
            {index !== 0 && <li className="p-2" />}
            <li>
              <h4 className="uppercase">{controlType}</h4>
              <div className="p-1" />
              <List animate={{ opacity: 0.9 }}>
                {Object.entries(value).map(
                  ([key, value], index) => (
                    <Fragment key={key}>
                      {index !== 0 && (
                        <li className="p-1" />
                      )}
                      <li className="flex">
                        <h6>{key}</h6>
                        <div className="p-1" />
                        <Key>{value}</Key>
                      </li>
                    </Fragment>
                  ),
                )}
              </List>
            </li>
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
