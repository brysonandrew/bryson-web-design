import { HEADER_SIZE_Y } from "@pages/index/constants";
import type { FC } from "react";
import { Container } from "./Container";
import { Cross } from "@components/icons/Cross";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { TMediaRecord } from "../config";
import { kebabToTitle } from "@utils/format";
import { Gallery } from "./gallery";
import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import { HEADER_SIZE } from "./gallery/sections/constants";

const Title = styled(motion.div)``;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Content: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  useFreezeScrollBar();
  return (
    <Container
      id={selectedPath}
      classValue="fixed top-0 left-0 screen-width screen-height z-10 text-teal-bright"
      style={{ zIndex: 99 }}
    >
      <div
        className="absolute left-18 top-10 flex items-center justify-between z-10"
        style={{ height: HEADER_SIZE }}
      >
        <Title className="whitespace-nowrap">
          {kebabToTitle(selectedPath)}
        </Title>
      </div>
      <div
        className="absolute top-10 right-18 flex items-center justify-between z-10"
        style={{ height: HEADER_SIZE }}
      >
        <Link className="relative" to="/showcase">
          <Cross />
        </Link>
      </div>
      <Gallery
        mediaRecord={mediaRecord}
        selectedPath={selectedPath}
      />
    </Container>
  );
};
