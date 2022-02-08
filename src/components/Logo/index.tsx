import { Wrapper } from "./styles";

interface LogoProps {
  backgroundModifier?: string;
  colorModifier?: string;
  children: any;
}

export function Logo({ backgroundModifier, colorModifier, children }: LogoProps) {
  return (
    <Wrapper 
      style={{ 
        color: colorModifier, 
        background: backgroundModifier,
      }}
    >
      {children}
    </Wrapper>
  );
}