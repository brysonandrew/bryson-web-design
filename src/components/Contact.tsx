import { Typewriter } from "@components/typewriter";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Border as Select } from "./select/Border";
import { useContext } from "@state/Context";

const CONTACT_ID = "CONTACT_ID";

const Root = styled(motion.li)``;

export const Contact = () => {
  const { isInit } = useContext();
  const { handlers, isSelected } =
    useSelectHandlers(CONTACT_ID);

  return (
    <Root className="relative" {...handlers}>
      <Link
        to="/contact"
        className="flex items-center justify-center px-2 pt-1 pb-1.5"
      >
        {isSelected && <Select />}
        <h6 className="uppercase text-xxxs">
          <>
            {isInit ? (
              <Typewriter wip="contact">
                {(content) => <>{content}</>}
              </Typewriter>
            ) : (
              "contact"
            )}
          </>
        </h6>
      </Link>
    </Root>
  );
};
