import { Global, css } from '@emotion/react';

export const Variables = () => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #fff;
          }
        `}
      />
    </>
  );
};
