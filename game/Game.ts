import { GameReport } from "./GameReport";
import { Spirit } from "./Spirit";

export type GameProps = {
  spirit: Spirit;
};

export class Game {
  turn = 0;
  report: GameReport;
  spirit: Spirit;
  constructor({ spirit }: GameProps) {
    this.spirit = spirit;
    this.report = {
      turns: [],
    };
  }
}
