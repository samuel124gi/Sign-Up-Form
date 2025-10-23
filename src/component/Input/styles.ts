import styled from "@emotion/styled";
import { InputVariant } from "../../types/component";
import colors from "../../styles/colors";

export const StyledInput = styled.input<{
  type: InputVariant;
}>`
  width: 100%;
  height: 45px;
  padding: 12px;
  border-radius: 5px;
  border: none;
  outline: 1.5px solid ${colors.primary01};
  ${({ type }) =>
    type === "text" &&
    `
  `}
  ${({ type }) =>
    type === "email" &&
    `
  `}

  ${({ type }) =>
    type === "password" &&
    `
  
  `}
`;
