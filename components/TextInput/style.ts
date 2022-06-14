import styled from "styled-components";
import variables from "../style/Variables.styles";

export const TextInputStyled = styled.label`
  display: block;
  width: 100%;
  input {
    ${variables}
    width: 100%;
    height: 30px;
    text-align: center;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 20px;
    color: var(--primary-text2);
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
`;
