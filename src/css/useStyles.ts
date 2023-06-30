import { useEffect } from "react";

export const useStyles = () => {
  useEffect(() => {
    import("./fonts.css");
    import("./globals.css");
  }, []);
};
