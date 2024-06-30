import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const List = styled.div`
  list-style: none;
  padding: 0.8rem 0;
  overflow: auto;
  .btn-back {
    display: none;
  }

  ${respondTo.medium`
  
  .btn-back{
  display:block;
  }
  `}
`;
