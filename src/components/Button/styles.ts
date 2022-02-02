import styled from "styled-components";

interface ButtonProps {
  highlight?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${props => props.highlight ? `var(--highlight-color)` : `var(--button-default)`};  
  color: ${props => props.highlight ? `var(--white)` : `var(--text-title)`};
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 8px;
  height: 48px;  
`;