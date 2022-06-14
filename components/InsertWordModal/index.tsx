import React, { useState } from "react";
import { useParagraph } from "../../helper/client-store/data.store";
import { InsertWordStyled } from "./style";

const InsertWordModal = ({ handleModal }: { handleModal: () => void }) => {
  const [text, setText] = useState("");
  const setParagraph = useParagraph(({ setParagraph }) => setParagraph);
  const handleOnChange = (val: string) => {
    setText(val);
  };
  // coppy text
  const handlePaste = () => {
    text && setParagraph(text);
    handleModal(); // close modal
  };
  return (
    <InsertWordStyled>
      <div className="container">
        <button className="close" onClick={handleModal}>
          x
        </button>
        <div className="textarea">
          <textarea
            placeholder="Insert words"
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <div className="button">
            <button type="button" onClick={handlePaste}>
              Insert
            </button>
          </div>
        </div>
      </div>
    </InsertWordStyled>
  );
};

export default InsertWordModal;
