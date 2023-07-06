type TConfig = {
  activeIndex: number, width: number, count: number;
};
export const resolveX = ({ activeIndex, width, count }: TConfig) => (-activeIndex * width) / count;
