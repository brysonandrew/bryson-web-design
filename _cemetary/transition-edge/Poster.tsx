import type { FC } from "react";
import { NftPoster } from "components/NftPoster";
import type { TEdgeStyle } from "contexts/TransitionComposer";

export type TTransitionPosterProps = {
  style: TEdgeStyle["posterStyle"];
};
export const Poster: FC<TTransitionPosterProps> = (props) => <NftPoster {...props} />;
