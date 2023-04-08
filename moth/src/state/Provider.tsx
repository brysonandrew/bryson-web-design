import type { FC } from "react";
import { useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { Context } from "./Context";
import { MOTH_STATE, STATE } from "./constants";
import type { TMothState, TReducer } from "./types";
import type { TChildrenElement } from "@t/index";

type TProviderProps = {
  children: TChildrenElement;
};
export const MothProvider: FC<TProviderProps> = ({
  children,
}) => {
  const mothRef = useRef<TMothState>({ ...MOTH_STATE });
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });
  const reset = () => {
    if (state.moth) {
      state.moth.instance.position.x = 0;
      state.moth.instance.position.y = 0;
    }
    mothRef.current = { ...MOTH_STATE };
    dispatch({ type: "reset", value: null });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        mothRef,
        reset,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
