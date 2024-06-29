import styled from "styled-components";

export const StyledSearch = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.2s ease-in-out;
  color: var(--color-background-500);

  /* background-color: var(--color-background-900); */
  background: ${({ theme }) => theme.colors.primaryLight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: scaleX(1.1);
  }
`;
