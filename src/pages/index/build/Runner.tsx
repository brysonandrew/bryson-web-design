import { Letter } from "@components/text/Letter";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";
import {
  BAR_BLACK_CLASS,
  ROLLING_TEXT_CLASS,
} from "../constants";
import { Main } from "./Main";
import type { TChildrenProps } from "./Motion";
import { GROUPS } from "./constants";

const List = styled(motion.ul)``;

type TProps = Partial<TChildrenProps>;
export const Runner: FC<TProps> = ({ xs }) => (
  <ul>
    {GROUPS.map((projects, index: number) => (
      <li
        key={`group-${index}`}
        className="flex relative items-center overflow-hidden w-full"
      >
        <motion.div className={BAR_BLACK_CLASS} />
        <List
          className="flex relative left-4 top-4"
          style={{
            x: (xs ?? ["-100%", "-100%", "-100%"])[index],
          }}
        >
          {projects.map((p, index) => (
            <Fragment key={`${p}-${index}`}>
              {index !== 0 && <li className="p-0.5" />}
              <li className={ROLLING_TEXT_CLASS}>
                <Letter>{p}</Letter>
              </li>
            </Fragment>
          ))}
          <Main index={index} />
        </List>
      </li>
    ))}
  </ul>
);
