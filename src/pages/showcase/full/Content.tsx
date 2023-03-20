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

const Title = styled(motion.div)``;

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Content: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => (
    <Container
      id={selectedPath}
      classValue="absolute top-0 left-0 screen-width screen-height z-10 text-teal-bright"
      style={{ top: HEADER_SIZE_Y }}
    >
      <div className="flex items-center justify-between h-6">
        <Title className="whitespace-nowrap" layout>
          {kebabToTitle(selectedPath)}
        </Title>
        <div className="p-1 shrink-0" />
        <Link
          className="relative left-6 p-6"
          to="/showcase"
        >
          <Cross />
        </Link>
      </div>
      <Gallery
        mediaRecord={mediaRecord}
        selectedPath={selectedPath}
      />
    </Container>
  );
