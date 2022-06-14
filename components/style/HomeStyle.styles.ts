import styled from "styled-components";
import variables from "./Variables.styles";

export const HomeStyled = styled.div`
  ${variables}
  display: flex;
  min-height: 100vh;
  align-items: center;
  h4 {
    text-align: center;
    font-size: 34px;
    line-height: 140%;
    color: var(--secondary-text);
    margin-bottom: 30px;
  }
  main {
    flex-grow: 1;
  }
  section {
    flex-grow: 1;
    padding: 30px 20px;
  }
  footer {
    display: flex;
    column-gap: 12px;
    justify-content: space-between;
    padding: 30px 20px 20px 20px;
    border-top: 1px solid var(--border);
    flex-shrink: 0;
    button {
      border: 1px solid var(--primary-text2);
      background: var(--primary-text2);
      color: var(--white);
      border-radius: 6px;
      height: 30px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      transition: all 0.3s;
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
  header {
    display: flex;
    column-gap: 12px;
    justify-content: space-between;
    padding: 30px 20px 20px 20px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    button {
      border: 1px solid var(--primary-text2);
      color: var(--primary-text2);
      background: var(--white);
      border-radius: 6px;
      height: 30px;
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        background: var(--primary-text2);
        color: var(--white);
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
  .container {
    max-width: 800px;
    margin: auto;
    border: 1px solid var(--white);
    border-radius: 10px;
    min-height: 400px;
    /* padding: 30px 20px; */
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
