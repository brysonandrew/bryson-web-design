import { useEffect } from "react";

export const useStyles = () => {
  useEffect(() => {
    import("@styles/fonts.css");
    import("@styles/globals.css");
  }, []);
};
