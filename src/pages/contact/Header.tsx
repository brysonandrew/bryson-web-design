import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Title } from "@components/text/Title";

const Root = styled(motion.header)``;

export const Header = () => (
    <Root className="flex items-center fixed w-full top-0 left-0 pt-4 pb-5 px-8 z-40">
      <Link to="/">
        <Title {...{ scale: 0.7, x: -28 }} />
      </Link>
    </Root>
  );
