import { SpiritProps } from "../Spirit";
import { Strategy } from "../Strategy";

export const mudSpiritProps: SpiritProps = {
  energyIncomeValues: [1, 1, 2, 3, 3, 4, 5],
  cardPlayValues: [1, 2, 2, 3, 3, 4],
  growthOptions: [
    {
      reclaim: true,
      prescence: 1,
    },
    {
      prescence: 2,
    },
    {
      cardGain: 1,
      prescence: 1,
      energy: 2,
    },
  ],
  cards: [
    {
      id: "Exaltation of Tangled Growth",
      cost: 0,
    },
    {
      id: "Foul Vapors and Fetid Mud",
      cost: 0,
    },
    {
      id: "Intractable Tickets and Thorns",
      cost: 2,
    },
    {
      id: "Open Shifting Waterways",
      cost: 1,
    },
  ],
};

export const mudStrategies: Strategy[] = [
  {
    turns: [
      {
        growthOptionIndex: 3,
        tracksChosen: [2],
      },
      {
        growthOptionIndex: 2,
        tracksChosen: [2, 2],
      },
      {
        growthOptionIndex: 3,
        tracksChosen: [2],
      },
    ],
  },
];
