import { StyledInput } from "./styles";
import { InputVariant } from "../../types/component";

interface InputProps {
  type: InputVariant;
  placeholder?: string;
  value?: string;
}

export const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return (
    <StyledInput type={type} placeholder={placeholder} {...rest}></StyledInput>
  );
};

export default Input;
