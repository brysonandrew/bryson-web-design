import { useReducer } from "react";
import type { FC } from "react";
import type { TReducer } from "./types";
import { reducer } from ".";
import { Context } from "./Context";
import { STATE } from "./constants";
import { useScrollThreshold } from "@hooks/useScrollThreshold";

type TProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });
  const { isThreshold } = state;

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
