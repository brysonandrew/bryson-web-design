
export const resolveSquare = (offset: number) => [
  [offset, offset],
  [-offset, offset],
  [offset, -offset],
  [-offset, -offset],
];

export const resolveLine = (offset: number, index: number) =>
  (offset * length * index) / length -
  (offset * length) / 2;
  