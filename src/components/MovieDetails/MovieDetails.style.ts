import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const StyledMovieDetails = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;

  header {
    display: flex;
  }

  section {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  img {
    width: 33%;
  }

  .details-overview {
    width: 100%;
    padding: 2.4rem 3rem;
    background-color: ${({ theme }) => theme.colors.background100};
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .details-overview h2 {
    font-size: 2.4rem;
    margin-bottom: 0.4rem;
    line-height: 1.1;
  }

  .details-overview p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .rating {
    background-color: ${({ theme }) => theme.colors.background100};
    border-radius: 0.9rem;
    padding: 2rem 2.4rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .btn-add {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondryText};
    border: none;
    border-radius: 10rem;
    font-size: 1.4rem;
    padding: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn-add:hover {
    opacity: 0.8;
  }

  

  ${respondTo.small`
  
  section{
  padding:1rem;
  }
  `}

  
`;
