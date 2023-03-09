import {
  useContext as useReactContext,
  createContext,
} from "react";
import { STATE } from "./constants";
import type { TAction, TContext } from "./types";

export const Context = createContext<TContext>({
  ...STATE,
  dispatch: (_: TAction) => null,
} as any);

export const useContext = (): TContext =>
  useReactContext<TContext>(Context);
