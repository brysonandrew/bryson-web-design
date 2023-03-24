import { useEffect, useReducer } from "react";
import type { FC } from "react";
import type { TReducer } from "./types";
import { reducer } from ".";
import { Context } from "./Context";
import { STATE } from "./constants";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
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
  const { isThreshold } = state;

  useEffect(() => {
    dispatch({ type: "init", value: null });
  }, []);

  useScrollThreshold({
    isThreshold,
    threshold: 40,
    handler: (next) =>
      dispatch({
        type: next ? "threshold-reached" : "threshold-lost",
        value: null,
      }),
  });

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
