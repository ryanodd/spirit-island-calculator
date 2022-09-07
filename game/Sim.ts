import { applyStrategyToGame } from "./ApplyStrategy";
import { Game } from "./Game";
import { Spirit } from "./Spirit";
import { mudSpiritProps, mudStrategies } from "./Spirits/Mud";

export const sim = () => {
  const game = new Game({
    spirit: new Spirit(mudSpiritProps),
  });
  applyStrategyToGame({ game, strategy: mudStrategies[0] });
  console.log(game.report);
};
