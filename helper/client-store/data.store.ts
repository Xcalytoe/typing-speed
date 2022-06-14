import create from "zustand";
import { IPoints, ITextInput, ITimeControl, IWordCloud } from "../Typeface";

export const useParagraph = create<IWordCloud>((set) => ({
  paragraph: "",

  setParagraph: (paragraph) =>
    set((state) => ({
      ...state,
      paragraph: paragraph,
    })),
}));

export const useTimer = create<ITimeControl>((set) => ({
  timer: 60,

  setTimer: (timer) =>
    set((state) => ({
      ...state,
      timer: timer,
    })),
}));

export const usePoints = create<IPoints>((set) => ({
  points: 0,
  setPoints: () => set((state) => ({ points: state.points + 1 })),
}));

export const useTextInput = create<ITextInput>((set) => ({
  textInput: "",

  setTextInput: (textInput) =>
    set(() => ({
      textInput: textInput,
    })),
}));
