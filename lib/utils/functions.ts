export const NOOP = () => null;
export const VOIDOP = () => {
  return;
};
// type TFunc<R = any, A = undefined> = (args?: A) => R;
// export const once = <R = any, A = undefined>(fn: TFunc<R, A>) => {
//   let func: TFunc<R, A>;

//   return (...args: A[]) => {
//     if (func) return func();

//     const result = fn(...args);

//     func = () => result;

//     return result;
//   };
// };

export const once = (func: any) => {
  let result: any;
  let n = 2;
  return (...args: any) => {
    if (--n > 0) {
      result = func.apply(this, ...args);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
};