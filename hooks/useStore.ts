import create from "zustand";
import { Spirit } from "../game/Spirit";
import { mudSpiritProps } from "../game/Spirits/Mud";
import { Strategy } from "../game/Strategy";

// https://github.com/pmndrs/zustand#first-create-a-store

export type State = {
  spirit: Spirit;
  setSpirit: (spirit: Spirit) => void;
  strategy: Strategy;
  setStrategy: (strategy: Strategy) => void;
};

export const useGlobalStore = create<State>((set) => ({
  spirit: new Spirit(mudSpiritProps),
  setSpirit: (spirit) => set((state) => ({ spirit })),
  strategy: {
    turns: [],
  },
  setStrategy: (strategy) => set((state) => ({ strategy })),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));
