import { useContext } from "@state/Context";
import { useEffect } from "react";

export const useSelectHandlers = (title: string) => {
  const { selectId, dispatch } = useContext();

  const handleSelectEnd = () =>
    dispatch({ type: "select-id", value: null });
  const handlers = {
    onHoverStart: () =>
      dispatch({ type: "select-id", value: title }),
    onHoverEnd: handleSelectEnd,
  };

  useEffect(() => handleSelectEnd, []);

  return { isSelected: selectId === title, handlers };
};
