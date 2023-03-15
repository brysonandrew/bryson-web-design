import type { FC } from "react";
import { Content } from "./Content";
import { TMediaRecord } from "../config";

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Full: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => {
  return (
    <Content
      mediaRecord={mediaRecord}
      selectedPath={selectedPath}
    />
  );
};
