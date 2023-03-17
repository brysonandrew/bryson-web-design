import {
  MutableRefObject,
  useEffect,
  useReducer,
  useRef,
} from "react";
import type { FC } from "react";
import type { TReducer } from "./types";
import { reducer } from ".";
import { Context } from "./Context";
import { STATE } from "./constants";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { TMedia } from "@pages/showcase/config";

type TProviderProps = {
  items: TMedia[];
  scrollArea: HTMLDivElement;
  posRef: any;
  children: JSX.Element | JSX.Element[];

};
export const Provider: FC<TProviderProps> = ({
  items,
  posRef,
  scrollArea,
  children,
}) => {

  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });

  return (
    <Context.Provider
      value={{
        dispatch,
        ...state,
        scrollArea,
        items,
        posRef
      }}
    >
      {children}
    </Context.Provider>
  );
};
