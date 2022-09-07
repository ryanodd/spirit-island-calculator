import { Game } from "./Game";
import { spiritReportFromGame } from "./GameReport";
import { Strategy } from "./Strategy";

// This RUNS the game based on the strategy, quite roughly.
// This is does not separate game logic from choice logic. It does both at once.

export type ApplyStrategyToGameProps = {
  game: Game;
  strategy: Strategy;
  endAfterWhichTurn?: number;
};

export function applyStrategyToGame({
  game,
  strategy,
  endAfterWhichTurn,
}: ApplyStrategyToGameProps) {
  const endTurn = endAfterWhichTurn ?? strategy.turns.length;
  console.log(game);
  console.log(strategy);
  while (game.turn < endTurn) {
    if (strategy.turns.length + 1 < game.turn) {
      console.error(`Strategy doesn't have ${endTurn} turns to sim!`);
      console.error(strategy);
      console.error(game);
      return;
    }

    const turnStrategy = strategy.turns[game.turn];

    // Choose & apply growth option
    const growthOptionChosen =
      game.spirit.growthOptions[turnStrategy.growthOptionIndex - 1];

    if (growthOptionChosen.reclaim) {
      game.spirit.cardsInHand = game.spirit.cards;
    }

    if ((growthOptionChosen.prescence ?? 0) > 0) {
      for (let x = 0; x < (growthOptionChosen.prescence ?? 0); x++) {
        if (x > turnStrategy.tracksChosen.length) {
          console.error(
            `not enough tracks chosen in the strategy for ${
              x + 1
            } presence this growth!`
          );
          console.error(turnStrategy);
          return;
        }
        if (turnStrategy.tracksChosen[x] === 1) {
          game.spirit.energyIncomeGrown = Math.min(
            game.spirit.energyIncomeGrown + 1,
            game.spirit.energyIncomeValues.length - 2 // TODO verify this works
          );
        }
        if (turnStrategy.tracksChosen[x] === 2) {
          game.spirit.cardPlaysGrown = Math.min(
            game.spirit.cardPlaysGrown + 1,
            game.spirit.cardPlayValues.length - 2
          );
        }
      }
    }

    if ((growthOptionChosen.energy ?? 0) > 0) {
      game.spirit.energy += growthOptionChosen.energy ?? 0;
    }

    if ((growthOptionChosen.cardGain ?? 0) > 0) {
      for (let x = 0; x < (growthOptionChosen.cardGain ?? 0); x++) {
        game.spirit.cards.push({ id: "new card", cost: 1 });
        game.spirit.cardsInHand.push({ id: "new card", cost: 1 });
      }
    }

    if ((growthOptionChosen.reclaimOne ?? 0) > 0) {
      const handCardIds = game.spirit.cardsInHand.map((card) => card.id);
      for (const card of game.spirit.cards) {
        if (!handCardIds.includes(card.id)) {
          game.spirit.cardsInHand.push(card);
          break;
        }
      }
    }

    if ((growthOptionChosen.cardPlays ?? 0) > 0) {
      // TODO do something. store extra card plays remaining this turn in spirit. Also store elements this turn in spirit :P
    }

    if ((growthOptionChosen.cost ?? 0) > 0) {
      game.spirit.energy -= growthOptionChosen.cost ?? 0;
    }

    // Get energy income
    game.spirit.energy +=
      game.spirit.energyIncomeValues[game.spirit.energyIncomeGrown];

    // Choose, pay for, & play cards

    // Record data
    game.report.turns.push({
      growthOptionChosen: turnStrategy.growthOptionIndex,
      spirit: spiritReportFromGame(game),
    });

    game.turn += 1;
  }

  return game;
}
