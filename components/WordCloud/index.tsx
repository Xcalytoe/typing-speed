import React, { useEffect, useState } from "react";
import { useParagraph } from "../../helper/client-store/data.store";
import { paragraphData } from "../../helper/constants/data";
import { RandomParagraph } from "../../helper/service";
import { WordCloudStyled } from "./style";

const WordCloud = () => {
  const [word, setWord] = useState("");
  const paragraph = useParagraph(({ paragraph }) => paragraph);

  useEffect(() => {
    setWord(!!paragraph ? paragraph : RandomParagraph(paragraphData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paragraph]);
  const splitWord = word
    .split(" ")
    .map((val, index) => <span key={index}>{val} </span>);
  return <WordCloudStyled>{splitWord}</WordCloudStyled>;
};

export default WordCloud;
