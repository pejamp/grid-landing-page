import { Wrapper } from "./styles";

interface ButtonProps {
  text?: string;
  backgroundModifier?: string; 
  colorModifier?: string;
}

export function Button({ text, backgroundModifier, colorModifier }: ButtonProps) {
  return (
    <Wrapper 
      style={{ 
        background: backgroundModifier,
        color: colorModifier
      }}
    >
      {text}
    </Wrapper>
  );
}