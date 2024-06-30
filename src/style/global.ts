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
}

  // Additional global styles can go here
`;
