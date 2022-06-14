export const RandomParagraph = (paragraphArray: string[]) => {
  const newParagraph =
    paragraphArray[Math.floor(Math.random() * paragraphArray.length)];
  return newParagraph;
};
