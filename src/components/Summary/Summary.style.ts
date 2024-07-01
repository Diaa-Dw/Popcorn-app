import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const StyledSummary = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: ${({ theme }) => theme.colors.background100};
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);

  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  ${respondTo.small`
  padding: 1.5rem 1rem 1.5rem 1rem;
  h2{
  font-size:1.4rem;
    justify-content: center;
  }


  p{
  font-size:1.3rem;
  gap:0.4rem;
  }

  `}
`;
