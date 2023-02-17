import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.section`
  
`

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = (props) => (
  <section className="h-full text-center" role="alert">
    <div className="flex flex-col items-center justify-center pb-1 text-xl text-black bg-white dark:text-white dark:bg-black text-gray-700 h-min-full p-2">
      <h1 className="mb-3 text-7xl">
        Something went wrong
      </h1>
      <button
        className="p-3 pt-1 m-2 mt-3 text-4xl bg-red-500 bg-opacity-50 border-red-600 border-solid rounded border-1 focus:outline-solid-fuchsia-600"
        type="reset"
        onClick={props.reset}
      >
        <p>
          Try again
          {
            // FIXME: This has weird padding for some reason.
            //<Reload className="!m-0 !mx-0 !mr-0 !b-0 !bx-0 !br-0" />
          }
        </p>
      </button>
      <code className="m-2">{props.error.toString()}</code>
    </div>
  </section>
);
