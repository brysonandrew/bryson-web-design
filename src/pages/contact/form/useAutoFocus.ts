import { useContext } from "@state/Context";
import { useEffect } from "react";

export const useAutoFocus = () => {
  const { contact, dispatch } = useContext();
  useEffect(() => {
    if (contact.focusKey === null) {
      dispatch({ type: "contact-focus", value: "name" });
    }
  }, []);
};