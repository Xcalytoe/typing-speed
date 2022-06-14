import React, { useState } from "react";
import { useTextInput } from "../../helper/client-store/data.store";
import { TextInputStyled } from "./style";

const TextInput = () => {
  const [inputText, setInputText] = useState("");
  const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e?.target?.value);
    // check when user clicks space
    if (e?.target?.value?.endsWith(" ")) {
      setTextInput(inputText); // set word to global state
      setTimeout(() => setInputText("")); // clear input
    }
  };

  const setTextInput = useTextInput(({ setTextInput }) => setTextInput);
  return (
    <TextInputStyled>
      <input
        type="text"
        value={inputText}
        placeholder="Enter word "
        onChange={handleKeyDown}
      />
    </TextInputStyled>
  );
};

export default TextInput;
