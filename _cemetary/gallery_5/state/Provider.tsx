import type { TMedia } from "@pages/showcase/config";
import type { TChildren } from "@t/index";
import type { FC, MutableRefObject } from "react";
import { useReducer } from "react";
import { reducer } from ".";
import { Context } from "./Context";
import { STATE } from "./constants";
import type { TPos, TReducer } from "./types";

type TProviderProps = {
  items: TMedia[];
  count: number;
  pageCount: number;
  scrollArea: HTMLDivElement;
  posRef: MutableRefObject<TPos>;
  children: TChildren;
};
export const Provider: FC<TProviderProps> = ({
  items,
  count,
  pageCount,
  posRef,
  scrollArea,
  children,
}) => {
  const [state, dispatch] = useReducer<TReducer>(
    reducer,
    STATE,
  );

  return (
    <Context.Provider
      value={{
        dispatch,
        ...state,
        scrollArea,
        items,
        count,
        pageCount,
        posRef,
      }}
    >
      {children}
    </Context.Provider>
  );
};
