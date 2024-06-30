import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 5.5rem;
  }

  ${respondTo.medium`
  
  img{
  width: 4.5rem
  }
  `}
`;
