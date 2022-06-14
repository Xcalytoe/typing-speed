import React from "react";
import { InsertWordStyled } from "./style";

const InsertWordModal = ({ handleModal }: { handleModal: () => void }) => {
  return (
    <InsertWordStyled>
      <div className="container">
        <button className="close" onClick={handleModal}>
          x
        </button>
        <div className="textarea">
          <textarea placeholder="Insert words" />
          <div className="button">
            <button type="button">Insert</button>
          </div>
        </div>
      </div>
    </InsertWordStyled>
  );
};

export default InsertWordModal;
