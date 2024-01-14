export const treeFormat = (index: number, arr: any[]) => {
  if (!arr?.length) return "";
  if (arr.length === 1) return "─";
  if (index === 0) {
    return "┌";
  } else if (index === arr.length - 1) {
    return "└";
  } else {
    return "├";
  }
};
