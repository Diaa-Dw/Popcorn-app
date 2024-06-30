import { css } from "styled-components";

const breakpoints = {
  small: "576px",
  medium: "868px",
  large: "992px",
  xlarge: "1200px",
};

// Media query generator function
export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);
