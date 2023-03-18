import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import type { FC } from "react";
import { TMediaRecord } from "../config";
import { Content } from "./Content";

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Full: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  useFreezeScrollBar();
  return (
    <Content
      mediaRecord={mediaRecord}
      selectedPath={selectedPath}
    />
  );
};
