import styled from "styled-components";
import variables from "../style/Variables.styles";

export const InsertWordStyled = styled.div`
  ${variables}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
  left: 0;
  top: 0;
  background: var(--background-overlay);

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .close {
      position: absolute;
      top: 30px;
      right: 40px;
      color: var(--primary-text2);
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: var(--white);
      border: 1px solid var(--primary-text2);
      font-size: 20px;
      cursor: pointer;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
  .textarea {
    max-width: 500px;
    width: 100%;
    .button {
      margin-top: 10px;
      display: flex;
      justify-content: end;
      button {
        height: 40px;
        border-radius: 6px;
        transition: all 0.3s;
        border: 2px solid var(--white);
        color: var(--white);
        width: 200px;
        cursor: pointer;
        background: var(--primary-text2);
        &:hover {
          transition: all 0.3s;
          color: var(--primary-text2);
          background: var(--white);
        }
        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
    }
  }
  textarea {
    width: 100%;
    padding: 20px;
    min-height: 200px;
    border-radius: 6px;
    transition: all 0.3s;
    border: 1px solid transparent;
    &:focus {
      transition: all 0.3s;
      outline: none;
      box-shadow: none;
      border: 1px solid var(--primary-text2);
    }
  }
`;
