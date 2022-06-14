export interface IWordCloud {
  paragraph: string;
  setParagraph: (paragraph: string) => void;
}
export interface ITimeControl {
  timer: number;
  setTimer: (timer: number) => void;
}
export interface IStopCounter {
  stopCounter: boolean;
  setStopCounter: (stopCounter: boolean) => void;
}
