import { Fragment } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { ThinLineGap } from "@components/ThinLineGap";
import { Blinders } from "@components/blinders/Blinders";
import { TextXl } from "@components/text/TextXl";
import styled from "@emotion/styled";
import {
  BAR_BLACK_CLASS,
  ROLLING_TEXT_CLASS,
} from "../constants";
import { Main } from "./Main";
import type { TChildrenProps } from "./Motion";
import { GROUPS } from "./constants";
import { STORY } from "@constants/copy";
import { Letter } from "@components/text/Letter";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = Partial<TChildrenProps>;
export const Shell: FC<TProps> = ({
  xs,
  opacityBlinders,
}) => (
  <Root className="flex flex-col items-center">
    <TextXl>{STORY.build}</TextXl>
    <ThinLineGap />
    <div className="relative overflow-hidden w-full left-8">
      <Blinders opacity={opacityBlinders} />
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
                x: (xs ?? ["-100%", "-100%", "-100%"])[
                  index
                ],
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
    </div>
  </Root>
);
