import { Button } from "./styles";

interface ButtonProps {
  text?: string;
  hightlightButton?: boolean; 
}

export function ButtonDefault(props: ButtonProps) {
  return (
    <Button highlight={props.hightlightButton}>{props.text}</Button>
  );
}