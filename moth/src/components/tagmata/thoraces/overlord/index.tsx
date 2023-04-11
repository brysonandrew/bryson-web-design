export const OVERLORD =
  "M183.188 20.107c-19.58 65.304-41.643 129.72-30.362 186.127l.352 1.766-16.03 80.148 15.366 92.19L234.17 488.36l12.03-83.46L224 416c-16-32-16-64 0-80l-48-16v-64c10.394 10.394 34.29 27.534 54.146 38.273l-15.564-54.478.69-2.072-31.51-9.002-.575-208.613zM329 22.81v205.694l-32.27 9.22.688 2.07-15.564 54.48C301.71 283.533 325.606 266.393 336 256v64l-48 16c16 16 16 48 0 80l-22.21-11.104 12.048 84.32 81.644-108.86 15.37-92.208L358.822 208l.352-1.766C370.278 150.712 348.196 87.226 329 22.81zm-73 49.75l-7 56v64.9l-15.582 46.745L256 319.238l22.582-79.033L263 193.46v-64.9l-7-56zm25 110.89v7.09l10.03 30.09 19.97-5.704v-17.322c-12.287-6.115-21.97-10.802-30-14.153zm-50 .005c-7.888 3.29-17.36 7.866-29.324 13.815l.05 17.863 19.243 5.498L231 190.54v-7.085zM192 288v16l32 16-32-32zm128 0l-32 32 32-16v-16zM25.97 372.31z";

import { Shape } from "@moth-components/shapes/Shape";
import { CIRCLE_CAGE_PATH } from "@moth-components/tagmata/cephalon/paths";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { useShape } from "@moth-hooks/shape/useShape";
import type { FC } from "react";

export const Overlord: FC<TBaseTagmataProps> = ({
  ...props
}) => {
  const shape = useShape(CIRCLE_CAGE_PATH);
  if (!shape) return null;
  return <Shape shape={shape} size={512} {...props} />;
};
