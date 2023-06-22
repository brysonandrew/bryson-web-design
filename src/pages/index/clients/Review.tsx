import { TextSm } from "@components/text/TextSm";
import type { FC } from "react";
import { Fragment } from "react";
import { REVIEWS } from "./constants";
import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@constants/animation";

const Long = styled(motion.div)``;
const Block = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  index: number;
  type: "long" | "short";
};
export const Review: FC<TProps> = ({
  index,
  type,
  ...props
}) => {
  const review = REVIEWS[index];
  const { author, project } = review;
  const content = review[type];

  if (Array.isArray(content)) {
    return (
      <Long
        className="absolute inset-0 left-2 bg-black-dark p-4 overflow-y-auto overflow-x-hidden z-10"
        {...props}
      >
        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ...MOTION_CONFIG,
            delay: MOTION_CONFIG.transition.duration,
          }}
        >
          <li>
            <TextSm classValue="text-teal-bright">
              {author} from {project} writes
            </TextSm>
          </li>
          <li className="py-1" />
          {content.map((part, index) => (
            <Fragment key={`${index}`}>
              {index !== 0 && <li className="py-1" />}
              <li>
                <TextSm classValue="text-white">
                  {part}
                </TextSm>
              </li>
            </Fragment>
          ))}
        </motion.ul>
      </Long>
    );
  }
  
  return (
    <TextSm>
      <Block className="text-white">{content}, </Block>
      <Block className="text-teal`">
        {author}, {project}
      </Block>
    </TextSm>
  );
};
