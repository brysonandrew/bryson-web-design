import { PNG_EXT, WEBP_EXT } from "@constants/media";

export const resolveWebpFilePath = (filePath: string) => filePath.replace(
  PNG_EXT,
  WEBP_EXT,
);