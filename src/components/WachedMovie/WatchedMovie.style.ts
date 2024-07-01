import styled from "styled-components";

export const StyledWatchedMovie = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  font-size: 1.6rem;
  align-items: center;

  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background100};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background100};
  }

  img {
    width: 100%;
    grid-row: 1 / -1;
  }

  h3 {
    font-size: 1.8rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }


  .btn-delete {
  position: absolute;
  right: 2.4rem;

  height: 2.8rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-red);
  color: var(--color-background-900);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-delete:hover {
  background-color: var(--color-red-dark);
}

`;
