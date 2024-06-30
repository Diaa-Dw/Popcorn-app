import styled from "styled-components";

export const Rating = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 0.1rem;
  span {
    line-height: 0%;
    font-size: 1.2rem;
  }

  .rating-count {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1.2rem 1rem;
    border-radius: 0.3rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.secondryText};
    font-weight: 600;
    width: 3rem;
  }
`;
