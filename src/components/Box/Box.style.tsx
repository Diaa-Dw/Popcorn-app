import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const StyledBox = styled.div`
  width: 60rem;
  max-width: 65rem;
  background-color: ${({ theme }) => theme.colors.background500};
  border-radius: 0.9rem;
  overflow: auto;
  position: relative;
  box-shadow: rgba(102, 120, 201, 0.712) 0px 4px 10px,
    rgba(43, 57, 75, 0.219) 0px 5px 10px;
  z-index: 2;

  ${respondTo.medium`
    width:100%;
    position:absolute;
    min-height:100%;

  `}
`;
