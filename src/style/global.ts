import { createGlobalStyle } from "styled-components";
import { respondTo } from "./_responsive";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background900};
  padding: 2.4rem;

  ${respondTo.medium`
  padding: 0.4rem;

  `}

.btn-back {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  height: 3.2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  /* background-color: var(--color-text); */
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background500};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
}

  // Additional global styles can go here
`;
