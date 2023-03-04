import { Plus } from "@components/icons/Plus";
import { TECH } from "@constants/tech";
import styled from "@emotion/styled";
import { XL } from "@styles/style";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Item } from "./tech/Item";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Tech: FC<TProps> = () => (
  <Root className="inline-flex flex-col items-start">
    <Item {...TECH.REACT} />
    {/* <div className="p-1" /> */}
    <div className="flex items-center justify-center w-full">
      <Plus classValue={clsx(XL, "text-teal-bright")} />
    </div>
    {/* <div className="p-1" /> */}
    <Item {...TECH.TYPESCRIPT} />
  </Root>
);
