import { useContext } from "@state/Context";

export const useSelectHandlers = (title: string) => {
  const { selectId, dispatch } = useContext();

  const handlers = {
    onHoverStart: () => dispatch({ type: "select-id", value: title }),
    onHoverEnd: () =>
      dispatch({ type: "select-id", value: null }),
  };

  return { isSelected: selectId === title, handlers };
};
