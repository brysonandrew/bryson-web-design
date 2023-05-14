import { Blinders } from "@components/blinders/Blinders";
import { Text } from "@components/text/Text";
import { Intro } from "@components/text/Intro";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Fragment } from "react";
import {
  BAR_CLASS,
  ROLLING_TEXT_CLASS,
} from "../constants";
import { Main } from "./Main";
import type { TChildrenProps } from "./Motion";
import { GROUPS } from "./constants";
import clsx from "clsx";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = Partial<TChildrenProps>;
export const Shell: FC<TProps> = ({
  xs,
  opacityBlinders,
}) => (
  <Root className="flex flex-col items-start">
    <Intro>To build</Intro>
    <div className="py-2" />
    <div className="relative overflow-hidden w-full left-8">
      <Blinders opacity={opacityBlinders} />
      <ul>
        {GROUPS.map((projects, index: number) => (
          <li
            key={`group-${index}`}
            className="flex relative items-center overflow-hidden w-full"
          >
            <motion.div
              className={clsx(BAR_CLASS, "opacity-40")}
            />
            <List
              className="flex relative left-4 top-6"
              style={{
                x: (xs ?? ["-100%", "-100%", "-100%"])[
                  index
                ],
              }}
            >
              {projects.map((p, index) => (
                <Fragment key={p}>
                  {index !== 0 && <li className="p-1" />}
                  <li className={ROLLING_TEXT_CLASS}>
                    <Text>{p}</Text>
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
