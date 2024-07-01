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

  .btn-toggle {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    height: 2.4rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background500};
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 999;
  }

  ${respondTo.medium`
    width:100%;
    position:absolute;
    height:100vh;
    min-height:100vh;
    overflow: scroll;


  `}
`;
