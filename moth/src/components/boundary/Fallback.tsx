import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.section``;

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = (props) => (
  <section className="h-full text-center" role="alert">
    <div className="flex flex-col items-center justify-center pb-1 text-xl h-min-full p-2">
      <h1 className="mb-3 text-7xl">
        Something went wrong
      </h1>
      <button
        className="p-4 py-2 m-2 mt-3 text-4xl bg-opacity-50 border-solid rounded border-1 focus:outline-teal"
        type="reset"
        onClick={() => {
          window.location.reload();
        }}
      >
        <p>Try again</p>
      </button>
      <code className="m-2">{props.error.toString()}</code>
    </div>
  </section>
);
