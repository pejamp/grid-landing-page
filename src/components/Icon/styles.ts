import styled from "styled-components";

export const IconStyled = styled.div`
  width: 64px;
  height: 64px;
  background: var(--highlight-color);
  color: var(--white);
  border-radius: 16px;
  grid-column: span 2;
  place-self: center;
  margin-bottom: 1rem;
  display: grid;

  svg {
    font-size: 2rem;
    place-self: center;
  }
`;