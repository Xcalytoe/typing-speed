import create from "zustand";
import { ITimeControl, IWordCloud } from "../Typeface";

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
