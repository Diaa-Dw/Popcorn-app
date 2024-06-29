import styled from "styled-components";

export const StyledHeader = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary} 15%,
    ${({ theme }) => theme.colors.background900} 60%
  );
  border-radius: 0.9rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.primaryLight};
`;
