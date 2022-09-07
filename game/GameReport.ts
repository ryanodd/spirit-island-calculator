import { Game } from "./Game";

export type CardReport = {
  cost: number;
};

export type SpiritReport = {
  energy: number;
  cards: CardReport[];
  energyIncomeGrown: number;
  cardPlaysGrown: number;
  reclaimOne: number;
};

export type TurnReport = {
  growthOptionChosen: number;
  spirit: SpiritReport;
};

export type GameReport = {
  turns: TurnReport[];
};

export const spiritReportFromGame = (game: Game): SpiritReport => {
  return {
    energy: game.spirit.energy,
    cards: game.spirit.cards.map((card) => {
      return { cost: card.cost };
    }),
    energyIncomeGrown: game.spirit.energyIncomeGrown,
    cardPlaysGrown: game.spirit.cardPlaysGrown,
    reclaimOne: game.spirit.reclaimOne,
  };
};
