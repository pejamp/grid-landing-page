import { ReactNode } from "react";
import { IconStyled } from "./styles";

interface IconProps {
  children: ReactNode;
}

export function Icon({ children }: IconProps) {
  return (
    <IconStyled>
      {children}
    </IconStyled>
  );
}