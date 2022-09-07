import { useCallback } from "react";
import { Spirit } from "../game/Spirit";
import { mudSpiritProps } from "../game/Spirits/Mud";
import { useGlobalStore } from "../hooks/useStore";

const SPIRIT_PROPS = [
  {
    name: "Mud",
    props: mudSpiritProps,
  },
];

export const GameSelect = () => {
  const { spirit, setSpirit } = useGlobalStore((state) => state);
  const selectSpirit = useCallback(() => {
    setSpirit(new Spirit(SPIRIT_PROPS["Mud"])); // TODO set based on <select> option
  }, []);
  return (
    <div>
      Spirit:
      <select>
        {SPIRIT_PROPS.map((spiritPropData) => {
          return (
            <option key={spiritPropData.name}>{spiritPropData.name}</option>
          );
        })}
      </select>
      <button onClick={selectSpirit}>Create Game</button>
    </div>
  );
};
