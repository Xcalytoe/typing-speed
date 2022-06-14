import React, { useEffect, useState } from "react";
import {
  useParagraph,
  usePoints,
  useTextInput,
} from "../../helper/client-store/data.store";
import { paragraphData } from "../../helper/constants/data";
import { RandomParagraph } from "../../helper/service";
import { WordCloudStyled } from "./style";

const WordCloud = () => {
  const [word, setWord] = useState("");

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const paragraph = useParagraph(({ paragraph }) => paragraph);
  const textInput = useTextInput(({ textInput }) => textInput);
  const setPoints = usePoints(({ setPoints }) => setPoints);

  useEffect(() => {
    !!textInput && checkWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textInput]);

  const splitWord = word.toLocaleLowerCase().split(" ");

  const checkWords = () => {
    console.log(splitWord[currentWordIndex], "hhh");

    const compareWords = splitWord[currentWordIndex];
    const matchWord = splitWord[currentWordIndex] == textInput.trim(); // compare with enterd word
    splitWord.length > currentWordIndex &&
      setCurrentWordIndex(currentWordIndex + 1);
    console.log(compareWords, textInput.trim());
    if (matchWord) {
      setPoints(); // set point if there's a match
    }
  };
  useEffect(() => {
    setWord(!!paragraph ? paragraph : RandomParagraph(paragraphData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paragraph]);

  return (
    <WordCloudStyled>
      {splitWord.map((val, index) => (
        <span key={index}>{val} </span>
      ))}
    </WordCloudStyled>
  );
};

export default React.memo(WordCloud);
