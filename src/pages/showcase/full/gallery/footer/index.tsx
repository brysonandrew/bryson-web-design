import styled from "@emotion/styled";
import { metalRadialDarkCss } from "@styles/metal";
import { motion } from "framer-motion";
import type { FC} from "react";
import { Fragment } from "react";
import { resolveTo } from "../resolveTo";
import { PADDING } from "../sections/constants";
import type { TBaseProps } from "../types";
import { useDrag } from "../useDrag";
import { Button } from "./Button";

export const Root = styled(motion.footer)``;
const Center = styled(motion.div)``;
export const Dragger = styled(motion.ul)``;

export const Metal = styled(motion.li)`
  ${metalRadialDarkCss}
`;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { width, items, motionX, itemWidth } = props;
  const dragHandlers = useDrag(props);

  return (
    <Root className="flex justify-center fixed bottom-0 w-full bg-black-5 backdrop-blur-sm">
      <Center
        className="relative h-full"
        style={{ width: itemWidth, left: -PADDING }}
      >
        <Dragger
          className="relative flex items-center h-full rounded-lg"
          whileHover={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          initial={false}
          style={{
            x: motionX,
            width: width + PADDING * 2,
            padding: PADDING,
          }}
          dragConstraints={{
            left: -width + itemWidth,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          {...dragHandlers}
        >
          <Metal className="absolute inset-0 bg-teal-01" />
          {items.map(({ key, name, img }) => (
            <Fragment key={key}>
              <Button
                name={img}
                to={resolveTo({ img, name })}
                itemWidth={itemWidth}
              />
            </Fragment>
          ))}
        </Dragger>
        <div className="py-2" />
      </Center>
    </Root>
  );
};
