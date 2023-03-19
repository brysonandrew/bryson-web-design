import type { FC } from "react";
import type { TMediaRecord } from "../config";
import { Content } from "./Content";

type TProps = {
  mediaRecord: TMediaRecord;
  selectedPath: string;
};
export const Full: FC<TProps> = ({
  mediaRecord,
  selectedPath,
}) => (
  <Content
    mediaRecord={mediaRecord}
    selectedPath={selectedPath}
  />
);
