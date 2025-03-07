import { css } from '@emotion/react';

export const carbonCss = css`
  background: linear-gradient(
        27deg,
        #151515 5px,
        transparent 5px
      )
      0 5px,
    linear-gradient(
        207deg,
        #151515 5px,
        transparent 5px
      )
      10px 0px,
    linear-gradient(
        27deg,
        #222 5px,
        transparent 5px
      )
      0px 10px,
    linear-gradient(
        207deg,
        #222 5px,
        transparent 5px
      )
      10px 5px,
    linear-gradient(
      90deg,
      #1b1b1b 10px,
      transparent 10px
    ),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: transparent;
  background-size: 20px 20px;
`;

export const carbonFiberCss = css`
  background: radial-gradient(
        black 15%,
        transparent 16%
      )
      0 0,
    radial-gradient(
        black 15%,
        transparent 16%
      )
      8px 8px,
    radial-gradient(
        rgba(255, 255, 255, 0.1) 15%,
        transparent 20%
      )
      0 1px,
    radial-gradient(
        rgba(255, 255, 255, 0.1) 15%,
        transparent 20%
      )
      8px 9px;
  background-color: transparent;
  background-size: 16px 16px;
`;

export const feltCss = css`
  background-image: url('https://www.transparenttextures.com/patterns/black-felt.png');
`;
export const blackFeltCss = css`
  background-color: var(--black-3);
  ${feltCss}
`;

export const twillCss = css`
  background-image: url('https://www.transparenttextures.com/patterns/black-twill.png');
`;
export const blackTwillCss = css`
  background-color: var(--black-3);
  ${twillCss}
`;

export const brightSquaresCss = css`
  background-image: url('https://www.transparenttextures.com/patterns/bright-squares.png');
`;

export const diagmondsCss = css`
  background-image: url('https://www.transparenttextures.com/patterns/diagmonds.png');
`;
