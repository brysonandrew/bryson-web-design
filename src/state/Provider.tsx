import { useEffect, useReducer } from "react";
import type { FC } from "react";
import type { TReducer } from "./types";
import { reducer } from ".";
import { Context } from "./Context";
import { STATE } from "./constants";
import { useDetectGPU } from "@react-three/drei";

type TProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const { isMobile } = useDetectGPU();

  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });

  useEffect(() => {
    dispatch({ type: "init", value: null });
  }, []);

  return (
    <Context.Provider
      value={{
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
