const generator = (rx: RegExp) =>
  ({
    *[Symbol.matchAll](input: string) {
      for (const d of input.matchAll(rx)) yield d[0];
    },
  } as any);

export const matchAlls = (input: string, rx: RegExp): RegExpMatchArray[] => [
  ...input.matchAll(generator(rx)),
];
