import path from "path";

export const prependCwd = (dir: string) => path.join(process.env.PROJECT_CWD || "", dir);

export const resolveCwd = () => {
  const cwd = process.env.PROJECT_CWD || "";
  if (!cwd) {
    throw Error("cwd not available");
  } else {
    return cwd;
  }
};
