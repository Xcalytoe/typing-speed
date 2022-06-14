import React from "react";
import { TextInputStyled } from "./style";

const TextInput = () => {
  return (
    <TextInputStyled>
      <input type="text" placeholder="Start typing" />
    </TextInputStyled>
  );
};

export default TextInput;
