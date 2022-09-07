import { Game } from "./Game";

export type TurnStrategy = {
  growthOptionIndex: number;
  tracksChosen: number[];
};

export type Strategy = {
  name?: string;
  turns: TurnStrategy[];
};
