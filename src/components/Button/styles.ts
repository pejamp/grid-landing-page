import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--button-default);  
  color: var(--text-title);
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 8px;
  height: 48px;
  
  @media screen and (min-width: 768px) {
    padding: 0 1.5rem;
    height: 56px;
  }
`;