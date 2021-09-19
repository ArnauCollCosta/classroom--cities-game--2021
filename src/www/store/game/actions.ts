import {
  GameCreatedAction,
  GameJoinedAction,
  GamePlayedAction,
  GameReplacedAction,
  GameState,
  NextPlayerAddedAction,
  GAME_CREATED,
  GAME_JOINED,
  GAME_PLAYED,
  GAME_REPLACED,
  NEXT_PLAYER_ADDED,
  GameRefreshedAction,
  GAME_REFRESHED,
} from "./types";

export function gameCreated(gameName: string): GameCreatedAction {
  return {
    type: GAME_CREATED,
    form: {
      gameName,
    },
  };
}

export function gameJoined(
  gameName: string,
  creatorName: string
): GameJoinedAction {
  return {
    type: GAME_JOINED,
    form: {
      gameName,
      creatorName,
    },
  };
}

export function gamePlayed(
  gameName: string,
  creatorName: string
): GamePlayedAction {
  return {
    type: GAME_PLAYED,
    form: {
      gameName,
      creatorName,
    },
  };
}

export function gameReplaced(game: GameState): GameReplacedAction {
  return {
    type: GAME_REPLACED,
    game,
  };
}

export function gameRefreshed(): GameRefreshedAction {
  return {
    type: GAME_REFRESHED,
  };
}
