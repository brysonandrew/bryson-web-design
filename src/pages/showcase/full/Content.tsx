import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import { HEADER_SIZE_Y } from "@pages/index/constants";
import type { FC } from "react";
import { Container } from "./Container";
import { TChildren } from "@t/index";
import { Cross } from "@components/icons/Cross";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Title = styled(motion.div)``;

type TProps = {
  selectedPath: string;
};
export const Content: FC<TProps> = ({ selectedPath }) => {
  useFreezeScrollBar();
  return (
    <Container
      id={selectedPath}
      classValue="fixed text-teal-bright"
      style={{ top: HEADER_SIZE_Y }}
    >
      <div className="flex items-center justify-between h-6">
        <Title className="whitespace-nowrap" layout>
          {selectedPath}
        </Title>
        <div className="p-1 shrink-0" />
        <Link
          className="relative left-6 p-6"
          to="/showcase"
        >
          <Cross />
        </Link>
      </div>
      <div className="p-2" />
      <div className="flex items-center justify-center w-full grow">
        {selectedPath}
      </div>
    </Container>
  );
};
