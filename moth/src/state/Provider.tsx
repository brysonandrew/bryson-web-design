import type { FC } from "react";
import { useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { Context } from "./Context";
import {
  LOCAL_STATE,
  MOTH_LOCAL_STORAGE_KEY,
  MOTH_STATE,
  STATE,
} from "./constants";
import type {
  TLocalState,
  TMothState,
  TReducer,
  TState,
} from "./types";
import type { TChildrenElement } from "@t/index";
import { useLocalStorage } from "@moth-hooks/useLocalStorage";

type TProviderProps = {
  children: TChildrenElement;
};
export const MothProvider: FC<TProviderProps> = ({
  children,
}) => {
  const [savedState, setSavedState] =
    useLocalStorage<TLocalState>(
      MOTH_LOCAL_STORAGE_KEY,
      LOCAL_STATE,
    );
  const mothRef = useRef<TMothState>({ ...MOTH_STATE });
  const [state, dispatch] = useReducer<TReducer, TState>(
    (...args) => {
      const nextState = reducer(...args);

      const {
        controls,
        isSound,
        inventory,
      } = nextState;

      setSavedState({
        controls,
        isSound,
        inventory,
      });

      return nextState;
    },
    STATE,
    (state) => ({
      ...state,
      ...savedState,
    }),
  );
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
        mothRef,
        reset,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
