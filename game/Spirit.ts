import { Card } from "./Card";

export type GrowthOption = {
  reclaim?: boolean;
  prescence?: number;
  energy?: number;
  cardGain?: number;
  cardPlays?: number;
  reclaimOne?: number;
  cost?: number;
};

export type SpiritProps = {
  cards: Card[];
  energyIncomeValues: number[];
  cardPlayValues: number[];
  growthOptions: GrowthOption[];
};

export class Spirit {
  energy = 0;
  energyIncomeGrown = 0;
  cardPlaysGrown = 0;
  reclaimOne = 0;

  cards: Card[];
  cardsInHand: Card[];
  energyIncomeValues: number[];
  cardPlayValues: number[];
  growthOptions: GrowthOption[];

  constructor({
    cards,
    energyIncomeValues,
    cardPlayValues,
    growthOptions,
  }: SpiritProps) {
    this.cards = cards;
    this.cardsInHand = cards;
    this.energyIncomeValues = energyIncomeValues;
    this.cardPlayValues = cardPlayValues;
    this.growthOptions = growthOptions;
  }
}
