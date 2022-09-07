import { State, useGlobalStore } from "../hooks/useStore";

export const StrategySelect = () => {
  const { strategy, setStrategy } = useGlobalStore((state) => state);
  return (
    <div>
      {strategy.turns.length}
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <button
        onClick={() => {
          setStrategy({ ...strategy, turns: [1] });
        }}
      >
        Save Strategy
      </button>
    </div>
  );
};
