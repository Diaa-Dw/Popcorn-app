import { css, CSSProp } from "styled-components";

interface BreakpointsProps {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

const breakpoints: BreakpointsProps = {
  small: "576px",
  medium: "868px",
  large: "992px",
  xlarge: "1200px",
};

// Media query generator function
export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const key = label as keyof BreakpointsProps;
    accumulator[key] = (...args: any[]) => css`
      @media (max-width: ${breakpoints[key]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {} as { [key in keyof BreakpointsProps]: (...args: any[]) => CSSProp }
);
