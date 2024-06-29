import styled from "styled-components";

export const StyledError = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fa5252;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: .5rem;
`;
