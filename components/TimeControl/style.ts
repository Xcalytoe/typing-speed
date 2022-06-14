import styled from "styled-components";
import variables from "../style/Variables.styles";

export const TimeControlStyled = styled.div`
  ${variables}
  display: flex;
  column-gap: 12px;
  label {
    display: flex;
    align-items: center;
  }
  input[type="radio"] {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  input[type="number"] {
    height: 30px;
    width: 120px;
    border-radius: 6px;
    transition: all 0.3s;
    border: 1px solid var(--border);
    padding-left: 10px;
    &:focus {
      transition: all 0.3s;
      outline: none;
      box-shadow: none;
      border: 1px solid var(--primary-text2);
    }
  }
`;
