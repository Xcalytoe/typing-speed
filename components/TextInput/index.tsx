import React from "react";
import { TextInputStyled } from "./style";

const TextInput = () => {
  const handleKeyDown = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target?.value?.endsWith(" ")) {
      console.log("kkkkkk");
    }
    console.log("kkkkkk");
  };
  return (
    <TextInputStyled>
      <input type="text" placeholder="Start typing" onChange={handleKeyDown} />
    </TextInputStyled>
  );
};

export default TextInput;
