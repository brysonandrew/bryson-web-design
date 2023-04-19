import { useEffect } from "react";
import StatsJs from "stats.js";

export const useStats = () => {
  useEffect(() => {
    const stats = new StatsJs();
    stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
  }, []);
};
