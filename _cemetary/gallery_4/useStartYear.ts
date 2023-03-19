import { useMemo } from "react";

export const useStartYear = () =>
  useMemo(() => new Date(Date.now()).getFullYear(), []);
