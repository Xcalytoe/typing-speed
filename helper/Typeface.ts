export interface IWordCloud {
  paragraph: string;
  setParagraph: (paragraph: string) => void;
}
export interface IPoints {
  points: number;
  setPoints: () => void;
}
export interface ITimeControl {
  timer: number;
  setTimer: (timer: number) => void;
}
export interface IStopCounter {
  stopCounter: boolean;
  setStopCounter: (stopCounter: boolean) => void;
}

export interface ITextInput {
  textInput: string;
  setTextInput: (textInput: string) => void;
}
