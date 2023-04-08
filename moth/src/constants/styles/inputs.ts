import { css } from "@emotion/react";
import { XXL_H, XL_H, LG_H, MD_H } from ".";

export const clearNativeCss = css`
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  outline-color: #666 !important;
`;

export const TEXT_SIZE_FROM_H = {
  [XXL_H]: "text-lg",
  [XL_H]: "text-md",
  [LG_H]: "text-sm",
  [MD_H]: "text-xs",
};